import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"
import { Locale, locales } from "./definitions"

// Can be imported from a shared config

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound()

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
