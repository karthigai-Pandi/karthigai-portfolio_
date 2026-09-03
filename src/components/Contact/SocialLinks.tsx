import { BriefcaseBusiness, Code2, Mail, MessageCircle } from "lucide-react";
import { contactInfo } from "../../data/contact";

const links = [
  { label: "GitHub", icon: Code2, href: contactInfo.github },
  { label: "LinkedIn", icon: BriefcaseBusiness, href: contactInfo.linkedin },
  { label: "Email", icon: Mail, href: `mailto:${contactInfo.email}` },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: contactInfo.whatsapp
      ? `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`
      : "",
  },
];

export default function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex flex-wrap gap-3">
      {links.map(({ label, icon: Icon, href }) =>
        href ? (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA]/70 transition hover:border-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        ) : (
          <span
            key={label}
            aria-label={`${label} link not configured`}
            title={`${label} link not configured`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7E2EA]/10 text-[#D7E2EA]/25"
          >
            <Icon size={18} aria-hidden="true" />
          </span>
        )
      )}
    </nav>
  );
}
