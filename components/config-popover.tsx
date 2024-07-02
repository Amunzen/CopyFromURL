import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { Popover as _Popover, PopoverContent as _PopoverContent, PopoverTrigger as _PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { defaultExcludeTags, defaultIncludeTags } from "@/definitions"
import { cn } from "@/util/cn"
import { PopoverClose } from "@radix-ui/react-popover"
import { Settings, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

type Props = {
  excludeTags: string
  includeTags: string
  onExcludeTagsChange: (excludeTags: string) => void
  onIncludeTagsChange: (includeTags: string) => void
}

export function Popover(
  { excludeTags, includeTags, onExcludeTagsChange, onIncludeTagsChange }: Props
) {
  const [_excludeTags, _setExcludeTags] = useState(excludeTags)
  const [_includeTags, _setIncludeTags] = useState(includeTags)

  const t = useTranslations()
  return (
    <_Popover>
      <_PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full text-gray-500" type="button">
          <Settings className="h-4 w-4" />
        </Button>
      </_PopoverTrigger>
      <_PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-bol">Settings</h3>
            <PopoverClose>
              <div className={buttonVariants({ variant: "ghost" })}>
                <X className="h-4 w-4" />
              </div>
            </PopoverClose>
          </div>

          <Accordion type="single" collapsible className="w-full px-4">
            <AccordionItem value="exclude-tags">
              <AccordionTrigger className="text-sm">{t("excludeTags")}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  <Textarea
                    maxLength={256}
                    id="excludeTags"
                    value={_excludeTags}
                    onChange={(e) => _setExcludeTags(e.target.value)}
                    placeholder="script, style, ..."
                    rows={5}
                    className="text-foreground/80"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="include-tags">
              <AccordionTrigger className="text-sm">{t("includeTags")}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  <Textarea
                    maxLength={256}
                    id="includeTags"
                    value={_includeTags}
                    onChange={(e) => _setIncludeTags(e.target.value)}
                    placeholder="main, article, ..."
                    rows={3}
                    className="text-foreground/80"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex justify-end gap-2">
            <div
              className={buttonVariants({ variant: "outline" })}
              onClick={() => {
                _setExcludeTags(defaultExcludeTags)
                _setIncludeTags(defaultIncludeTags)
                onExcludeTagsChange(defaultExcludeTags)
                onIncludeTagsChange(defaultIncludeTags)
              }}
              onKeyUp={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  _setExcludeTags(defaultExcludeTags)
                  _setIncludeTags(defaultIncludeTags)
                  onExcludeTagsChange(defaultExcludeTags)
                  onIncludeTagsChange(defaultIncludeTags)
                }
              }}
            >
              {t("resetButton")}
            </div>
            <PopoverClose>
              <div
                className={cn(buttonVariants())}
                onClick={() => {
                  onExcludeTagsChange(_excludeTags)
                  onIncludeTagsChange(_includeTags)
                }}
                onKeyUp={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onExcludeTagsChange(_excludeTags)
                    onIncludeTagsChange(_includeTags)
                  }
                }}
                tabIndex={0}
                role="button"
              >
                {t("saveButton")}
              </div>
            </PopoverClose>
          </div>
        </div>
      </_PopoverContent>
    </_Popover>
  )
}