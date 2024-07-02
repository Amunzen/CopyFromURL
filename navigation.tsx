import { createSharedPathnamesNavigation } from "next-intl/navigation"
import { locales } from "@/definitions"

export const localePrefix = "always" // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })

