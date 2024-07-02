import { Link } from "@/navigation"
import { cn } from "@/util/cn"
import { useTranslations } from "next-intl"
import { Button } from "./button"
import { buttonVariants } from "./button-variants"

export function SignInButton({ className }: { className?: string }) {
  const t = useTranslations("common")
  return (
    <Link
      href="/sign-in"
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        className
      )}
    >
      {t("logIn")}
    </Link>
  )
}

export function SignUpButton({ className }: { className?: string }) {
  const t = useTranslations("common")
  return (
    <Link
      href="/sign-up"
      className={cn(buttonVariants({ variant: "default" }), className)}
    >
      {t("signUp")}
    </Link>
  )
}
