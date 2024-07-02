import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function InfoItem({ icon: Icon, text, linkHref, linkText, external }: { icon: React.ElementType, text: string, linkHref: string, linkText: string, external: boolean }) {
  return (
    <div className="flex items-start space-x-4">
      <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" />
      <div className="flex-grow">
        <p className="text-sm inline">
          {text}{' '}
          <Link
            href={linkHref}
            className="text-sm hover:underline inline-flex items-center"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {linkText}
            {external && <ExternalLink className="w-3 h-3 ml-1" />}
          </Link>
        </p>
      </div>
    </div>
  )
}