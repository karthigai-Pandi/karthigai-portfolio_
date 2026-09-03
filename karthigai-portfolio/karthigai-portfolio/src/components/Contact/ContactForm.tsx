import { useState, type FormEvent } from "react";
import { AlertCircle, Check, Send } from "lucide-react";
import { contactInfo } from "../../data/contact";
import {
  submitContactMessage,
  type ContactPayload,
} from "../../services/contactService";

type FormErrors = Partial<Record<keyof ContactPayload, string>>;

const initialValues: ContactPayload = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

function validate(values: ContactPayload): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (values.message.trim().length < 10) {
    errors.message = "Message must contain at least 10 characters.";
  }
  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-center gap-1 text-sm text-[#ff9d8d]" role="alert">
      <AlertCircle size={14} aria-hidden="true" />
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function updateField(field: keyof ContactPayload, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || values.website) return;

    setStatus("sending");
    try {
      await submitContactMessage({
        ...values,
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center border border-[#D7E2EA]/20 bg-[#121212] p-8 text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#D7E2EA] text-[#0C0C0C]">
          <Check size={28} aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-medium text-[#D7E2EA]">Message Sent Successfully</h3>
        <p className="mt-3 max-w-sm text-[#D7E2EA]/65">
          Thanks for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialValues);
            setStatus("idle");
          }}
          className="mt-8 min-h-11 rounded-full border border-[#D7E2EA]/40 px-5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition hover:border-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="border border-[#D7E2EA]/20 bg-[#121212] p-6 sm:p-8">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm text-[#D7E2EA]">
          Full Name
          <input
            name="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-2 min-h-12 w-full border border-[#D7E2EA]/25 bg-[#0C0C0C] px-4 text-[#D7E2EA] outline-none transition placeholder:text-[#D7E2EA]/30 focus:border-[#D7E2EA]"
            placeholder="Your name"
          />
          <FieldError id="name-error" message={errors.name} />
        </label>
        <label className="text-sm text-[#D7E2EA]">
          Email Address
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-2 min-h-12 w-full border border-[#D7E2EA]/25 bg-[#0C0C0C] px-4 text-[#D7E2EA] outline-none transition placeholder:text-[#D7E2EA]/30 focus:border-[#D7E2EA]"
            placeholder="you@example.com"
          />
          <FieldError id="email-error" message={errors.email} />
        </label>
      </div>

      <label className="mt-6 block text-sm text-[#D7E2EA]">
        Subject
        <input
          name="subject"
          value={values.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className="mt-2 min-h-12 w-full border border-[#D7E2EA]/25 bg-[#0C0C0C] px-4 text-[#D7E2EA] outline-none transition placeholder:text-[#D7E2EA]/30 focus:border-[#D7E2EA]"
          placeholder="How can I help?"
        />
        <FieldError id="subject-error" message={errors.subject} />
      </label>

      <label className="mt-6 block text-sm text-[#D7E2EA]">
        Message
        <textarea
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full resize-y border border-[#D7E2EA]/25 bg-[#0C0C0C] p-4 text-[#D7E2EA] outline-none transition placeholder:text-[#D7E2EA]/30 focus:border-[#D7E2EA]"
          placeholder="Tell me a little about your project or opportunity..."
        />
        <FieldError id="message-error" message={errors.message} />
      </label>

      {status === "error" && (
        <div className="mt-6 border border-[#ff9d8d]/40 bg-[#ff9d8d]/10 p-4 text-sm text-[#ffb1a4]" role="alert">
          <p className="font-medium">Something went wrong.</p>
          <p className="mt-1">Please try again or contact me directly by email.</p>
          <a href={`mailto:${contactInfo.email}`} className="mt-3 inline-block underline underline-offset-4">
            Email {contactInfo.email}
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D7E2EA] px-6 text-sm font-medium uppercase tracking-wider text-[#0C0C0C] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] disabled:cursor-wait disabled:opacity-60"
      >
        <Send size={16} aria-hidden="true" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
