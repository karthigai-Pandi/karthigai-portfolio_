export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

export async function submitContactMessage(payload: ContactPayload): Promise<void> {
  const apiUrl = import.meta.env.VITE_CONTACT_API_URL?.trim();

  if (!apiUrl) {
    throw new Error("Contact API is not configured.");
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Contact request failed.");
  }
}
