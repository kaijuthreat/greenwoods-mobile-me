// src/lib/email.ts
// Client-side wrapper — sends the submission to the serverless API endpoint.
// This file must NOT import '@github/spark' (server-only).

export type FormSubmission = {
  name: string;
  phone: string;
  email: string;
  year: string;
  make: string;
  model: string;
  issue: string;
  timestamp: string;
};

async function postToApi(path: string, body: unknown) {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err?.error || `Request failed: ${res.status}`);
  }
  return res.json();
}

/**
 * Forward the submission to the serverless email endpoint (server handles LLM + email).
 * Both owner notification and customer confirmation are handled server-side.
 */
export async function sendNotificationEmail(submission: FormSubmission): Promise<void> {
  await postToApi('/api/send-email', submission);
}

/**
 * If you previously had a separate customer confirmation flow, call the same endpoint
 * or create a separate server endpoint to handle different emails. For now we reuse it.
 */
export async function sendCustomerConfirmationEmail(submission: FormSubmission): Promise<void> {
  await postToApi('/api/send-email', submission);
}