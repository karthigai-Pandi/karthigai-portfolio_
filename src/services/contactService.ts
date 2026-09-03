export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

export async function submitContactMessage(payload: ContactPayload): Promise<void> {
  // Use public VITE_CONTACT_API_URL when set (development or explicit public config).
  // Otherwise fall back to a server-side proxy endpoint `/api/contact` so
  // the real backend URL can remain private in server-side env vars.
  const publicApiUrl = import.meta.env.VITE_CONTACT_API_URL?.trim();
  const apiUrl = publicApiUrl || "/api/contact";

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Contact request failed.");
  }
}
