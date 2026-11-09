import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-[180ms] ease-[var(--ease-out-expo)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "glass-pill rounded-full text-foreground hover:text-accent-ink dusk:text-foreground",
        rule:
          "min-h-11 rounded-none border-b-2 border-foreground pb-1.5 text-[0.7rem] uppercase tracking-[0.18em] hover:border-accent",
        quiet:
          "min-h-11 rounded-none border-b border-border pb-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground hover:border-foreground/40 hover:text-foreground",
        inline:
          "min-h-0 items-baseline gap-1 rounded-none border-b border-foreground/50 pb-0.5 text-sm font-medium normal-case tracking-normal hover:border-accent",
      },
      size: {
        default: "",
        sm: "",
        icon: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        size: "default",
        class: "h-12 gap-3 px-6 text-sm",
      },
      {
        variant: "primary",
        size: "sm",
        class: "h-11 gap-2.5 px-4 text-xs",
      },
      { variant: "primary", size: "icon", class: "size-12 p-0" },
      { variant: "rule", size: "sm", class: "text-[0.62rem]" },
      { variant: "quiet", size: "sm", class: "text-[0.62rem]" },
      { variant: "inline", size: "sm", class: "text-xs" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

function ButtonGlyph({
  variant,
  size,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
}) {
  if (size === "icon") {
    return <ArrowUpRight className="size-4" />;
  }

  if (variant === "inline") {
    return <ArrowUpRight className="size-3" />;
  }

  if (variant === "rule" || variant === "quiet") {
    return (
      <ArrowUpRight className="size-4 transition-transform duration-[180ms] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    );
  }

  return (
    <ArrowUpRight className="size-4 transition-transform duration-[180ms] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  );
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /** Show the trailing arrow. On by default; turn off for text-only actions. */
  arrow?: boolean;
}

/** The props a slotted child (link or button) can receive. */
type SlotProps = React.HTMLAttributes<HTMLElement> &
  React.RefAttributes<HTMLElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      arrow = true,
      children,
      ...props
    },
    ref
  ) => {
    const resolvedVariant = variant ?? "primary";
    const resolvedSize = size ?? "default";
    const classes = cn(
      buttonVariants({
        variant: resolvedVariant,
        size: resolvedSize,
        className,
      })
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<SlotProps>;

      return React.cloneElement(
        child,
        {
          ...props,
          ...child.props,
          className: cn(classes, child.props.className),
          ref,
        },
        arrow ? (
          <>
            {child.props.children}
            <ButtonGlyph variant={resolvedVariant} size={resolvedSize} />
          </>
        ) : (
          child.props.children
        )
      );
    }

    return (
      <button type="button" className={classes} ref={ref} {...props}>
        {children}
        {arrow && (
          <ButtonGlyph variant={resolvedVariant} size={resolvedSize} />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
