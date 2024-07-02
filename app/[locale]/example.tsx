import { Button } from "@/components/ui/button"

const examples = [
  "https://example.com",
  "https://google.com",
  "https://github.com/"
]


export function Example({ url, isLoading, onClick }: { url: string, isLoading?: boolean, onClick: (url: string) => void }) {
  return <Button
    type="submit"
    variant="outline"
    disabled={isLoading}
    onClick={(e) => {
      onClick(url)
    }}
    className="text-blue-500 hover:text-blue-7000"
  >
    {url}
  </Button>
}



export function Examples({ onClick, isLoading }: { onClick: (url: string) => void, isLoading?: boolean }) {
  return <div className="flex gap-2 flex-wrap">
    {examples.map((url) => <Example key={url} url={url} onClick={onClick} isLoading={isLoading} />)}
  </div>
}