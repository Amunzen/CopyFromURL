import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"
import { Locale, locales } from "@/definitions"
import { cn } from "@/util/cn"
import { GoogleAnalytics } from "@next/third-parties/google"
import { GeistSans } from "geist/font/sans"
import { NextIntlClientProvider } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

type LayoutProps = {
  children: React.ReactNode
  params: { locale?: Locale }
}

export default async function LocaleLayout({
  children,
  params: { locale = "en" },
}: LayoutProps) {
  unstable_setRequestLocale(locale)
  if (!locales.includes(locale as Locale)) notFound()
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    // if the locale is not found, throw an error
    console.error(error)
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", GeistSans.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-cyan-200 md:p-4">
            {children}
          </div>
          <SiteFooter />
        </NextIntlClientProvider>
        <Toaster />
      </body>
      {["production"].includes(process.env.VERCEL_ENV || "") && (
        <GoogleAnalytics gaId={"G-CQXBZMDM7E"} />
      )}

    </html>
  )
}

// see: https://next-intl-docs.vercel.app/docs/getting-started/app-router#add-generatestaticparams-to-applocalelayouttsx
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
