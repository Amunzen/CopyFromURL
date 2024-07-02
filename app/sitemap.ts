import { locales } from "@/definitions"
import { BASE_URL } from "@/site-config"
import { MetadataRoute } from "next"


export default function sitemap(): MetadataRoute.Sitemap {
  const createAlternates = (path: string) => {
    return locales.reduce((acc, locale) => {
      acc[locale] = `${BASE_URL}/${locale}${path}`
      return acc
    }, {} as Record<string, string>)
  }
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      alternates: { languages: createAlternates("") },
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      alternates: { languages: createAlternates("/terms") },
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      alternates: { languages: createAlternates("/privacy-policy") },
    },
  ]
}
