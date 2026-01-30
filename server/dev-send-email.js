/**
 * server/dev-send-email.js
 * Simple Express server for local testing of the send-email handler.
 * Runs outside Vite on port 3001 and exposes POST /api/send-email.
 *
 * NOTE: This duplicates the core logic for local testing. Use the api/send-email.ts
 * serverless function for production (Vercel).
 */
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const nodemailer = require("nodemailer");

// Try to require @github/spark; fall back to a safe stub for local testing if unavailable
let spark;
try {
  spark = require("@github/spark");
  spark = spark && spark.default ? spark.default : spark;
} catch (e) {
  console.warn("Warning: @github/spark require() failed. Using local fallback stub.");
  spark = {
    llmPrompt: (strings, ...vals) => {
      let s = "";
      for (let i = 0; i < strings.length; i++) {
        s += strings[i];
        if (i < vals.length) s += String(vals[i]);
      }
      return s;
    },
    llm: async (prompt, model, raw) => {
      return JSON.stringify({
        subject: "[local-stub] New service request",
        body: "This is a local stub response. Prompt snippet:\n" + String(prompt).slice(0, 400)
      });
    }
  };
}

const OWNER_EMAIL = process.env.OWNER_EMAIL || "wyattanthony.nelson05@gmail.com";

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error("SMTP credentials not configured in environment (.env.local missing or incomplete)");
  }
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });
}

const app = express();
app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
  const submission = req.body;
  if (!submission) return res.status(400).json({ error: "Invalid body" });

  try {
    const prompt = spark.llmPrompt`You are an email composer for Greenwood's 24 Hour Mobile Mechanic Services.

Create a professional email notification for the business owner about a new service request. The email should:
- Have a clear, professional subject line
- Include all customer and vehicle details
- Be formatted professionally

Customer Information:
- Name: ${submission.name}
- Phone: ${submission.phone}
- Email: ${submission.email}

Vehicle Information:
- Year: ${submission.year}
- Make: ${submission.make}
- Model: ${submission.model}

Issue Description:
${submission.issue}

Submission Time: ${new Date(submission.timestamp).toLocaleString()}

Return the result as a JSON object with "subject" and "body" properties. Format the body with line breaks for readability.`;

    const emailContent = await spark.llm(prompt, "gpt-4o-mini", true);
    let parsedEmail;
    try {
      parsedEmail = JSON.parse(emailContent);
    } catch (err) {
      parsedEmail = { subject: "New service request", body: String(emailContent) };
    }

    const transporter = createTransporter();
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: OWNER_EMAIL,
      subject: parsedEmail.subject ?? "New service request",
      text: parsedEmail.body
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("send-email error", err && err.message ? err.message : err);
    return res.status(500).json({ error: err && err.message ? err.message : "Internal error" });
  }
});

const port = process.env.DEV_EMAIL_PORT || 3001;
app.listen(port, () => {
  console.log("Dev send-email server listening on http://localhost:" + port + "/api/send-email");
});
