import { Locale } from "@/definitions"
import { siteConfig } from "@/site-config"
import { cn } from "@/util/cn"
import { Roboto } from 'next/font/google'
import Image from "next/image"

const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
})


export function Logo({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        <Image src="/logo.webp" alt="Logo" width={43} height={43} />
        <h1 className={cn("pl-2 text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600", roboto.className)}>
          {siteConfig.name}
        </h1>
      </div>
      <span className="text-md md:text-lg font-bold text-center pl-1 text-foreground/70">
        {siteConfig.description[locale]}
      </span>
    </div>
  )
}
