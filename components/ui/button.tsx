"use client"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/util/cn"
import { Loader } from "lucide-react"
import { buttonVariants } from "./button-variants"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { pending?: boolean }
>(({ className, variant, size, asChild = false, pending, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  const { children, ...rest } = props
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...rest}
      disabled={pending || props.disabled}
    >
      {pending && (
        <Loader className="w-4 h-4 mr-2 animate-spin text-accent-foreground" />
      )}
      {children}
    </Comp>
  )
})
Button.displayName = "Button"

export { Button }
