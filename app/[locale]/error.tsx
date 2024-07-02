"use client"
import { Button } from "@/components/ui/button"
import { useTransition } from "react"

// biome-ignore lint/suspicious/noShadowRestrictedNames: nextjs way of handling errors
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const [loading, startTransition] = useTransition()
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <h2>Something went wrong!</h2>

      <div className="border-1 max-w-xl border p-3">
        <h2 className="text-red-500">{error.message || ""}</h2>
      </div>
      <div className="flex flex-row gap-3">
        <Button onClick={() => reset()} className="btn-outline btn max-w-xs">
          Reload
        </Button>
        <Button
          disabled={loading}
          onClick={() => {
            window.location.href = "/"
          }}
        >
          Back to the top
        </Button>
      </div>
    </div>
  )
}
