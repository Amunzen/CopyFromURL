import { Input as RawInput } from "@/components/ui/input"
import { useTranslations } from "next-intl"
import React from 'react'

type Props = {
  url: string
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const URLInput = React.forwardRef<HTMLInputElement, Props>(({ url, disabled, onChange }, ref) => {
  const t = useTranslations()
  return (
    <RawInput
      disabled={disabled}
      maxLength={256}
      ref={ref}
      type="url"
      placeholder={t("urlPlaceholder")}
      value={url}
      onChange={onChange}
      className="pl-10 pr-24 py-6 text-lg rounded-full border-2 border-gray-300 focus:border-blue-500 transition-colors"
    />
  )
});

