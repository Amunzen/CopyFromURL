// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

import { Link } from "@/navigation"

export default function NotFoundPage() {
  return (
    <div className="relative flex h-full flex-col bg-background ">
      <main className="flex-1 container relative justify-center items-center flex flex-col gap-3">
        <span className="text-3xl pt-10">404 Not Found</span>
        <Link
          href="/"
          className="link-hover link text-foreground/60 hover:underline text-sm"
        >
          Home
        </Link>
      </main>
    </div>
  )
}
