import "@/app/globals.css"
import { Locale } from "@/definitions"
import { siteConfig } from "@/site-config"

import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { locale: Locale }
}

export function generateMetadata(
  { params: { locale } }: Props,
  parent: ResolvingMetadata
): Metadata {

  return {
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
      languages: {
        da: "/da",
        de: "/de",
        en: "/en",
        es: "/es",
        fr: "/fr",
        it: "/it",
        nl: "/nl",
        pt: "/pt",
        ru: "/ru",
        sv: "/sv",
        zh: "/zh",
        ja: "/ja",
      },
    },
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },

    description: siteConfig.description?.[locale],
    keywords: siteConfig.keywords[locale],
    creator: siteConfig.creator,
    authors: siteConfig.authors,
    publisher: siteConfig.publisher,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description?.[locale],
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    icons: {
      icon: "/favicon.ico",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
    category: "technology",
  }


}
type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return children
}

