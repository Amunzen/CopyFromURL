import { cn } from "@/util/cn"
import React from "react"
import { MaxWidthWrapper } from "./max-width-wrapper"

export function ContentHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex h-36 items-center border-b border-gray-200 bg-gray-50 ",
        className
      )}
    >
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </div>
  )
}
