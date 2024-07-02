
import { Button } from "@/components/ui/button"
import { cn } from "@/util/cn"
import { Loader2 } from "lucide-react"

type Props = {
  onClick?: () => void
  disabled: boolean
  className?: string,
  children: React.ReactNode
  type?: "button" | "submit"
  isLoading?: boolean
}

export function GradientButton({ onClick, disabled, className, type = "button", children, isLoading }: Props) {
  return <Button
    type={type}
    onClick={onClick}
    disabled={disabled}

    className={
      cn('rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 px-6 flex gap-2', className)
    }
  >
    {isLoading && <Loader2 className="animate-spin w-4 h-4" />}
    {children}
  </Button>
}