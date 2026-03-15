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

const OWNER_EMAIL = process.env.OWNER_EMAIL || "greenwoodc233@gmail.com";

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
    const emailBody = `New Service Request from Greenwood's Website

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

Submitted: ${new Date(submission.timestamp).toLocaleString()}
`;

    const transporter = createTransporter();
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: OWNER_EMAIL,
      subject: `New Service Request - ${submission.name} - ${submission.year} ${submission.make} ${submission.model}`,
      text: emailBody
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
