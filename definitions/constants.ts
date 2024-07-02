// locale sets
export const localeSets = [
  { locale: "da", name: "Dansk" },
  { locale: "de", name: "Deutsch" },
  { locale: "en", name: "English" },
  { locale: "es", name: "Español" },
  { locale: "fr", name: "Français" },
  { locale: "it", name: "Italiano" },
  { locale: "nl", name: "Nederlands" },
  { locale: "pt", name: "Português" },
  { locale: "ru", name: "Русский" },
  { locale: "sv", name: "Svenska" },
  { locale: "zh", name: "中文" },
  { locale: "ja", name: "日本語" },
] as const

// array of language codes
export const locales = localeSets.map((locale) => locale.locale)

export const defaultExcludeTags =
  'script, style, noscript, iframe, img, svg, [style*="display:none"], header, nav, footer, [role="banner"], [role="navigation"]'
export const defaultIncludeTags =
  "main, article, .content, #content, .main-content"
