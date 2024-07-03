import { Link } from "@/navigation"
import { cn } from "@/util/cn"
import { ExternalLinkIcon } from "lucide-react"
import { LanguageMenu } from "./language-menu"

function FooterLinkSection({
  title,
  links,
}: {
  title: string
  links: { href?: string; text: string; external?: boolean }[]
}) {
  return (
    <div className="flex flex-col gap-2 ">
      <span className="text-sm">{title}</span>
      {links.map((link, index) => {
        if (link.href === undefined)
          return (
            <span
              key={`footerLinkKey${index.toString()}`}
              className="link text-foreground  text-sm"
            >
              {link.text}
            </span>
          )
        return (
          <Link
            key={`footerLinkKey${index.toString()}`}
            className="link-hover link text-foreground hover:underline text-sm flex items-center gap-1"
            href={link.href}
            target={link.external ? "_blank" : undefined}
          >
            {link.text}
            {link.external && <ExternalLinkIcon className="w-3 h-3 text-foreground/60" />}
          </Link>
        )
      })}
    </div>
  )
}

function Copyright() {
  return (
    <span className="text-xs text-foreground/60">
      © {new Date().getFullYear()} Amunzen Inc., Tokyo, Japan. All rights reserved.
    </span>
  )
}

const CONTACT_LINKS = [
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeOQPq_L9uhU0K-QK5pheE4ZxTssPk4hQteyYMxkIOJvcz3rQ/viewform?usp=sf_link",
    text: "Contact Form",
    external: true,
  },
  { text: "Amunzen Inc.", href: "https://www.amunzen.com/english", external: true },

]


const LEGAL_LINKS = [
  { href: "/privacy-policy", text: "Privacy policy" },
  { href: "/terms", text: "Terms" },
]

const AUTHOR_LINKS = [
  { text: "Keisuke Nagakawa" },
  { text: "Blog", href: "https://medium.com/@kay_20731", external: true }
]

export function SiteFooter({
  className,
}: {
  className?: string
}) {
  return (
    <footer
      className={cn(
        "mx-auto flex flex-col items-center justify-center pb-3 gap-3 w-full pt-5 ",
        className
      )}
    >
      <div className="flex flex-row justify-between gap-7 pt-3">
        <FooterLinkSection title="Contact" links={CONTACT_LINKS} />
        <FooterLinkSection title="Legal" links={LEGAL_LINKS} />
        <FooterLinkSection title="Creator" links={AUTHOR_LINKS} />
      </div>
      <LanguageMenu withLabel />
      <Copyright />
    </footer>
  )
}
