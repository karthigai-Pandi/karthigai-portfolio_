import { useState } from "react";
import { Download, BriefcaseBusiness, Code2, Mail, MessageCircle, MapPin } from "lucide-react";
import FadeIn from "../FadeIn";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";
import { contactInfo } from "../../data/contact";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const whatsappUrl = contactInfo.whatsapp
    ? `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`
    : undefined;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="relative bg-[#111111] px-5 py-24 text-[#D7E2EA] sm:px-8 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn y={30}>
          <div className="mb-14 flex flex-col gap-6 border-b border-[#D7E2EA]/20 pb-10 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/25 px-3 py-2 text-xs uppercase tracking-[0.18em] text-[#D7E2EA]/75">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#8ee6b1]" aria-hidden="true" />
                Open to Opportunities
              </div>
              <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                Let&apos;s Build Something Together
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#D7E2EA]/65 md:text-lg">
              I&apos;m always open to discussing software development opportunities, interesting projects, and new ideas.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <FadeIn x={-30} y={0}>
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <ContactCard
                  icon={Mail}
                  label="Email Me"
                  display={contactInfo.email}
                  actionLabel="Send Email"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`}
                  onCopy={copyEmail}
                  copied={copied}
                />
                <ContactCard
                  icon={MessageCircle}
                  label="WhatsApp"
                  display="My preferred quick contact"
                  actionLabel={whatsappUrl ? "Chat on WhatsApp" : "Add number to enable"}
                  href={whatsappUrl}
                />
                <ContactCard
                  icon={BriefcaseBusiness}
                  label="LinkedIn"
                  display="Professional network"
                  actionLabel={contactInfo.linkedin ? "Connect on LinkedIn" : "Add profile to enable"}
                  href={contactInfo.linkedin || undefined}
                />
                <ContactCard
                  icon={Code2}
                  label="GitHub"
                  display="Projects and code"
                  actionLabel={contactInfo.github ? "View GitHub" : "Add profile to enable"}
                  href={contactInfo.github || undefined}
                />
              </div>

              <div className="mt-8 grid gap-6 border-y border-[#D7E2EA]/20 py-7 sm:grid-cols-2">
                <div className="flex gap-3">
                  <MapPin className="mt-1 shrink-0 text-[#D7E2EA]/60" size={18} aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#D7E2EA]/50">Location</p>
                    <p className="mt-2 text-sm">{contactInfo.location}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#D7E2EA]/50">Availability</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#D7E2EA]/75">{contactInfo.availability}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
                <SocialLinks />
                <div>
                  <a
                    href={contactInfo.resume}
                    download
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#D7E2EA]/40 px-5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition hover:border-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
                  >
                    <Download size={16} aria-hidden="true" />
                    Download Resume
                  </a>
                  <p className="mt-2 max-w-[240px] text-right text-xs text-[#D7E2EA]/45">
                    Add {contactInfo.resume} to enable this download.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn x={30} y={0}>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/50">Start a conversation</p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-[#D7E2EA]/20 pt-6 text-xs uppercase tracking-[0.16em] text-[#D7E2EA]/45">
          <span>Karthigai Pandian</span>
          <a href="#top" className="transition hover:text-[#D7E2EA]">Back to top</a>
        </div>
      </div>
    </section>
  );
}
