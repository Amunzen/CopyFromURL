import { cn } from "@/util/cn"
import React from "react"

const Description = React.forwardRef<
 HTMLParagraphElement,
 React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
 return (
  <p
   ref={ref}
   className={cn("text-sm text-muted-foreground", className)}
   {...props}
  />
 )
})
Description.displayName = "Description"

export { Description }
