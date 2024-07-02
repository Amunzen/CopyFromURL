import { Locale } from "@/definitions"
import { Logo } from "./logo"

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="p-3">
      <Logo locale={locale} />
    </header>
  )
}
