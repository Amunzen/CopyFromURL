import { cn } from "@/util/cn"
import { Loader,} from 'lucide-react';

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12",
        className
      )}
    />
  )
}
export function SpinnerView() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full pt-10">
      <Loader className="animate-spin text-gray-400" />
    </div>
  )
}
