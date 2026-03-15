/* api/send-email.ts */
import { VercelRequest, VercelResponse } from '@vercel/node';
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

const OWNER_EMAIL = process.env.OWNER_EMAIL || 'greenwoodc233@gmail.com';

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
    const transporter = createTransporter();

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

    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: OWNER_EMAIL,
      subject: `New Service Request - ${submission.name} - ${submission.year} ${submission.make} ${submission.model}`,
      text: emailBody,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('send-email error', err);
    return res.status(500).json({ error: err?.message ?? 'Internal error' });
  }
}
