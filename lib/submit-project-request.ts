export type ProjectRequestPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  details: string;
};

/**
 * Sends the contact form payload.
 *
 * No backend is configured yet, so this currently posts to `/api/contact`,
 * a Next.js route handler you can wire to any provider:
 *
 * - Formspree: POST payload to your form endpoint
 *   (https://formspree.io/f/your-form-id) and return its response.
 * - Resend: use the Resend SDK server-side inside the route handler
 *   to email the payload to your team.
 * - Supabase: insert the payload into a `project_requests` table
 *   using the Supabase server client.
 *
 * Until `/api/contact` exists, this throws so the form shows a clear
 * error state instead of silently pretending to succeed.
 */
export async function submitProjectRequest(
  payload: ProjectRequestPayload
): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to submit project request");
  }
}
