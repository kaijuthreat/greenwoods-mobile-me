/* src/lib/email.ts - client wrapper (no @github/spark imports) */
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

export async function sendNotificationEmail(submission: FormSubmission): Promise<void> {
  await postToApi('/api/send-email', submission);
}

export async function sendCustomerConfirmationEmail(submission: FormSubmission): Promise<void> {
  await postToApi('/api/send-email', submission);
}
