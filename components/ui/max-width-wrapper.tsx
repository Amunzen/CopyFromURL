import { cn } from "@/util/cn"
import { ReactNode } from "react"

export function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-10 ",
        className
      )}
    >
      {children}
    </div>
  )
}
