import { Logo } from "@/components/logo"
import {
  Card, CardContent, CardFooter,CardHeader 
} from "@/components/ui/card"
import { Locale } from "@/definitions"
import { GithubIcon, ShieldCheck } from "lucide-react"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { AboutAccordion } from "./about-accordion"
import { Content } from "./content"
import { InfoItem } from "./info-item"

type PageProps = { params: { locale?: Locale } }

export async function Page2({ params: { locale = "en" } }: PageProps) {
  unstable_setRequestLocale(locale)
  return (
    // <main className="w-full max-w-4xl flex-1 flex flex-col gap-8 justify-center items-center mx-2">
    <main className="flex flex-col max-w-4xl flex-1">
    </main>
  )
}

export default async function Page({ params: { locale = "en" } }: PageProps) {
  unstable_setRequestLocale(locale)
  const t = await getTranslations()
  return (
    // <main className="w-full max-w-4xl flex-1 flex flex-col gap-8 justify-center items-center mx-2">
    <main className="flex flex-col mx-2">
      <div className="flex-1 min-h-screen flex justify-center items-center">
        <Card className="w-full max-w-4xl rounded-3xl shadow-2xl ">
          <CardHeader className="flex items-center" >
            <Logo locale={locale} />
          </CardHeader>
          <CardContent className="px-2 md:px-4">
            <Content locale={locale} />
          </CardContent>
          <CardFooter className="flex justify-start bg-gray-100 text-sm text-foreground/50 pt-5 flex-col items-start rounded-b-3xl gap-2">
            <InfoItem icon={ShieldCheck} text={t("securityMessage")} linkHref="/privacy-policy" linkText={t("privacyPolicyLink")} external={false} />
            <InfoItem icon={GithubIcon} text={t("openSourceMessage")} linkHref="https://github.com/Amunzen/copy-from-url" linkText="GitHub" external={true} />
          </CardFooter>
        </Card>

      </div>
      <div className="flex-1 flex justify-center items-center pb-44 mx-3">
        <AboutAccordion />
      </div>
    </main>
  )
}

