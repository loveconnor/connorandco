import React from "react"
import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-skeleton rounded-sm [--skeleton-bg:var(--color-muted,rgb(229_229_229))] [--skeleton-highlight:rgb(255_255_255_/_0.6)] [background:linear-gradient(120deg,transparent_40%,var(--skeleton-highlight),transparent_60%)_var(--skeleton-bg)_0_0_/_200%_100%] dark:[--skeleton-bg:rgb(38_38_38)] dark:[--skeleton-highlight:rgb(255_255_255_/_0.08)]",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
