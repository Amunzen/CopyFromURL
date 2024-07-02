import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from "next-intl"

export function AboutAccordion() {
  const t = useTranslations()

  const accordionItems = [
    {
      title: t("whatIsTitle"),
      content: t("whatIsContent"),
    },
    {
      title: t("whyCreatedTitle"),
      content: t("whyCreatedContent"),
    },
    {
      title: t("whatUseTitle"),
      content: t("whatUseContent"),
    },
    {
      title: t("costTitle"),
      content: t("costContent"),
    },
    {
      title: t("safetyTitle"),
      content: t("safetyContent"),
    }
  ]

  return (
    <Accordion type="single" collapsible className="w-full max-w-xl">
      {accordionItems.map((item, index) => (
        <AccordionItem key={item.title} value={`item-${index + 1}`}>
          <AccordionTrigger className="text-start">{item.title}</AccordionTrigger>
          <AccordionContent>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
