import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/shadcn"

const alertVariants = cva(
  "g-relative g-w-full g-rounded-lg g-border g-px-4 g-py-3 [&>svg+div]:g-translate-y-[-3px] [&>svg]:g-absolute [&>svg]:g-left-4 [&>svg]:g-text-foreground [&>svg~*]:g-pl-7",
  {
    variants: {
      variant: {
        default: "g-bg-background g-text-foreground",
        destructive:
          "g-border-destructive/50 g-text-destructive dark:g-border-destructive [&>svg]:g-text-destructive",
        info:
          "g-bg-blue-400 g-text-white g-border-blue-400/50 dark:g-border-blue-400 [&>svg]:g-text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('g-mb-1 g-font-medium g-leading-none g-tracking-tight', className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('[&_p]:g-leading-relaxed', className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
