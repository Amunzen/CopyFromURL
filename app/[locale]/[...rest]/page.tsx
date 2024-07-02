import { Locale } from "@/definitions"
import { unstable_setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

export default function CatchAllPage({
  params: { locale = "en" },
}: {
  params: { locale?: Locale }
}) {
  unstable_setRequestLocale(locale)
  notFound()
}
