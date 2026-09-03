import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Copy, Check } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  display: string;
  actionLabel: string;
  href?: string;
  onCopy?: () => void;
  copied?: boolean;
}

export default function ContactCard({
  icon: Icon,
  label,
  display,
  actionLabel,
  href,
  onCopy,
  copied = false,
}: ContactCardProps) {
  const action = href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D7E2EA]/40 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition hover:border-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
    >
      {actionLabel}
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  ) : (
    <span className="inline-flex min-h-11 items-center rounded-full border border-[#D7E2EA]/15 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/40">
      {actionLabel}
    </span>
  );

  return (
    <article className="group flex min-h-[190px] flex-col justify-between border border-[#D7E2EA]/20 bg-[#121212] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D7E2EA]/60">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA]">
          <Icon size={19} aria-hidden="true" />
        </div>
        {onCopy && (
          <button
            type="button"
            onClick={onCopy}
            className="rounded-full p-2 text-[#D7E2EA]/60 transition hover:bg-[#D7E2EA]/10 hover:text-[#D7E2EA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
            aria-label={copied ? "Email copied" : "Copy email address"}
            title={copied ? "Email copied" : "Copy email address"}
          >
            {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
          </button>
        )}
      </div>
      <div>
        <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/55">{label}</p>
        <p className="break-words text-base text-[#D7E2EA]">{display}</p>
      </div>
      <div>{action}</div>
    </article>
  );
}
