"use client" // Error components must be Client Components
import { Button } from "@/components/ui/button"
// https://nextjs.org/docs/app/building-your-application/routing/error-handling

import { useTransition } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const [loading, startTransition] = useTransition()

  return (
    <html lang="en">
      <body className="flex h-screen flex-col items-center justify-center gap-3">
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
            onClick={async () => {
              startTransition(async () => {
                await fetch("/api/back-to-top", {
                  method: "POST",
                })
              })
            }}
            className="btn-outline btn max-w-xs"
          >
            Back to the top
          </Button>
        </div>
      </body>
    </html>
  )
}
