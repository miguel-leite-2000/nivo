import { ReactNode } from "react"

type Props = {
  children: ReactNode
  variant: "primary" | "secondary"
}

export function Badge({variant, children}: Props) {
  return (
    <div className={`py-1 px-2 rounded-xl font-semibold text-xs ${variant === "primary" ? 'bg-teal-950 text-teal-300' : ' bg-zinc-900 text-zinc-500'}`}>{children}</div>
  )
}