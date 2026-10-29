import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  [
    "neo-border",
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md text-sm font-bold font-sans",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: "neo-primary",

        destructive: "neo-danger text-white",

        outline: "neo-outline",

        secondary: "bg-secondary hover:bg-secondary",

        ghost: "border-transparent bg-transparent shadow-none hover:border-black hover:bg-accent hover:shadow-none",

        link: "border-transparent bg-transparent shadow-none underline-offset-4 hover:underline hover:shadow-none",
      },

      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "size-10 p-0",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
