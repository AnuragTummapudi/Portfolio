import { FileText, Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import type { socialLinks } from "@/data/portfolio";

type Social = (typeof socialLinks)[number];

export function SocialButton({ social }: { social: Social }) {
  const isExternal = social.href.startsWith("http");

  return (
    <Link
      href={social.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex h-9 items-center gap-2 rounded-lg border border-edge bg-surface px-3 text-[13px] font-semibold text-foreground transition-colors hover:border-strong hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
    >
      <SocialIcon kind={social.kind} />
      {social.label}
    </Link>
  );
}

function SocialIcon({ kind }: { kind: Social["kind"] }) {
  switch (kind) {
    case "github":
      return <FaGithub className="size-3.5" />;
    case "linkedin":
      return <FaLinkedinIn className="size-3.5" />;
    case "mail":
      return <Mail className="size-3.5" />;
    case "resume":
      return <FileText className="size-3.5" />;
  }
}
