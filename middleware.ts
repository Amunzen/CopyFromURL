import createMiddleware from "next-intl/middleware"
import { locales } from "@/definitions"

export default createMiddleware({
  locales,
  defaultLocale: "en",
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(da|de|en|es|fr|it|nl|pt|ru|sv|zh|ja)/:path*"],
}
