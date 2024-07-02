"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { localeSets, locales } from "@/definitions"
import { Link, usePathname } from "@/navigation"
import { Globe } from "lucide-react"
import { Button } from "./ui/button"

export function LanguageMenu({ withLabel = false }: { withLabel?: boolean }) {
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={withLabel ? "lg" : "icon"}>
          <Globe className="w-5 h-5 z-100 text-gray-500 hover:text-accent-foreground " />
          {withLabel && <span className="pl-3">Language</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {locales.map((l) => {
          const label =
            localeSets.find((ls) => ls.locale === l)?.name || "Language"
          return (
            <DropdownMenuItem key={l} asChild>
              <Link href={pathname} locale={l}>
                {label}
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
