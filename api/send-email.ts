/* api/send-email.ts */
import { VercelRequest, VercelResponse } from '@vercel/node';
import spark from '@github/spark';
import nodemailer from 'nodemailer';

type FormSubmission = {
  name: string;
  phone: string;
  email: string;
  year: string;
  make: string;
  model: string;
  issue: string;
  timestamp: string;
};

const OWNER_EMAIL = process.env.OWNER_EMAIL || 'wyattanthony.nelson05@gmail.com';

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error('SMTP credentials not configured in environment');
  }
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const submission = req.body as FormSubmission;
  if (!submission) return res.status(400).json({ error: 'Invalid body' });

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

    const emailContent = await spark.llm(prompt, 'gpt-4o-mini', true);
    let parsedEmail: { subject?: string; body: string };
    try {
      parsedEmail = JSON.parse(emailContent);
    } catch {
      parsedEmail = { subject: 'New service request', body: String(emailContent) };
    }

    const transporter = createTransporter();
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: OWNER_EMAIL,
      subject: parsedEmail.subject ?? 'New service request',
      text: parsedEmail.body,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('send-email error', err);
    return res.status(500).json({ error: err?.message ?? 'Internal error' });
  }
}
