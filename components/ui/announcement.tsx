import { Link } from "@/navigation"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { Separator } from "@/components/ui/separator"
import { cn } from "@/util/cn"

type AnnouncementProps = {
  emoji: string
  text: string
  href?: string
  className?: string
}

const AnnouncementContent: React.FC<AnnouncementProps> = ({ emoji, text }) => (
  <>
    {emoji}
    <Separator className="mx-2 h-4" orientation="vertical" />
    <span>{text}</span>
  </>
)

const containerClassName =
  "inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"

export function Announcement({
  emoji,
  text,
  href,
  className,
}: AnnouncementProps) {
  if (href) {
    return (
      <Link href={href} className={cn(containerClassName, containerClassName)}>
        <AnnouncementContent emoji={emoji} text={text} />
        <ArrowRightIcon className="ml-1 h-4 w-4" />
      </Link>
    )
  }
  return (
    <div className={cn(containerClassName, className)}>
      <AnnouncementContent emoji={emoji} text={text} />
    </div>
  )
}
