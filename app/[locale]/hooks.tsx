import { useEffect, useRef } from "react"

export function useInitFocus() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    const input = document.querySelector("input")
    if (input) {
      input.focus()
    }
  }, [])
  return { inputRef }
}

