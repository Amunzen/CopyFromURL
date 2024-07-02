"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Locale, defaultExcludeTags, defaultIncludeTags } from "@/definitions"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { CheckIcon, CopyIcon, Link as LinkIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { Popover } from "../../components/config-popover"
import { GradientButton } from "../../components/gradient-button"
import { Examples } from "./example"
import { useInitFocus } from "./hooks"
import { URLInput } from "./input"
import { handleFetchApiRoute } from "./utils"
import copy from "copy-to-clipboard"




export function Content({ locale }: { locale: Locale }) {
  const [isLoading, setIsLoading] = useState(false)
  const [url, setUrl] = useState("")
  const [text, setText] = useState("")
  const [error, setError] = useState("")
  const [excludeTags, setExcludeTags] = useState(defaultExcludeTags)
  const [includeTags, setIncludeTags] = useState(defaultIncludeTags)
  const { inputRef } = useInitFocus()
  const t = useTranslations()

  const [fetchedAndCopied, setFetchedAndCopied] = useState(false)
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()


  async function handleFetch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setText("")
    try {
      const response = await handleFetchApiRoute(url, excludeTags, includeTags)
      if (response.error) {
        setError(response.error)
        return
      }
      const text = (response as { text: string }).text
      setText(text)
      await navigator.clipboard.writeText(text)
      // copy(text, { message: "Fetched!" })
      setFetchedAndCopied(true)
      toast({
        title: t("copied"),
        description: t("copiedDescription"),
        duration: 4000,
        variant: "success"

      })
      setTimeout(() => setFetchedAndCopied(false), 1200)
    } catch (e) {
      toast({
        title: t("copied"),
        description: t("pleaseSelectCopyButton"),
        duration: 4000,
        variant: "success"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return <form className="flex flex-col gap-5" onSubmit={handleFetch}>
    <div className="relative flex items-center">
      <URLInput
        disabled={isLoading}
        url={url}
        onChange={(e) => setUrl(e.target.value)}
        ref={inputRef}
      />
      <LinkIcon className="absolute left-3 text-gray-400" size={20} />
      <div className="absolute right-2 flex space-x-2 items-center">
        <Popover excludeTags={excludeTags} includeTags={includeTags} onExcludeTagsChange={setExcludeTags} onIncludeTagsChange={setIncludeTags} />
        <GradientButton
          type="submit"
          disabled={isLoading || fetchedAndCopied}
          isLoading={isLoading}
        >
          {!fetchedAndCopied ? "Go!" : <>
            <CheckIcon className="w-4 h-4" />
            {t("copied")}
          </>}
        </GradientButton>
      </div>
    </div>
    {error &&
      <Alert variant={"destructive"}>
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle className="text-red-500">
          {t("error")}
        </AlertTitle>
        <AlertDescription>
          {error}
        </AlertDescription>
      </Alert>
    }
    <Examples onClick={(url) => setUrl(url)} isLoading={isLoading} />
    <div className="relative">
      <Textarea
        placeholder={t("textareaPlaceholder")}
        value={text}
        disabled={!text}
        onChange={(e) => setText(e.target.value)}
        className="h-64 p-4 border-2 border-gray-300 focus:border-blue-500 transition-colors rounded-3xl"
      />

      {
        text &&
        <Button
          variant={"ghost"}
          type="button"
          onClick={() => {
            copy(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 1200)
          }}
          disabled={!text}
          className="absolute right-2 bottom-2  bg-white hover:bg-white"

        >
          <div className="flex items-center gap-2 text-foreground/70 text-sm">
            {copied ?
              <>
                <CheckIcon className="w-3 h-3" />
                <span>{t("copied")}</span>
              </> :
              <>
                <CopyIcon className="w-3 h-3" />
                <span>{t("copy")}</span>
              </>
            }
          </div>
        </Button>
      }
    </div>
  </form>

}