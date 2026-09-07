import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "destructive";
  icon?: ReactNode;
  trailingIcon?: ReactNode;
};

export default function Button({
  children,
  variant = "primary",
  className,
  disabled,
  icon,
  trailingIcon,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-foreground text-primary",
    secondary: "bg-background/70 text-foreground border border-border",
    destructive: "bg-destructive text-foreground",
  };

  const stateClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const classes = twMerge(
    `w-max-content px-8 py-1.5 rounded-md font-medium flex flex-row items-center justify-center gap-2`,
    variantClasses[variant],
    stateClasses,
    className,
  );

  return (
    <button {...props} disabled={disabled} className={classes}>
      {icon && <span className="text-primary">{icon}</span>}

      {children}

      {trailingIcon && <span className="text-primary">{trailingIcon}</span>}
    </button>
  );
}
