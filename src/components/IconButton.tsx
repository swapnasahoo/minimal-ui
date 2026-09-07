import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type IconButtonProps = ComponentProps<"button"> & {
  icon: ReactNode;
  variant?: "primary" | "secondary" | "destructive";
};

export default function IconButton({
  icon,
  variant = "primary",
  className,
  disabled,
  ...props
}: IconButtonProps) {
  const variantClasses = {
    primary: "bg-background text-foreground",
    secondary: "bg-background/70 text-foreground",
    destructive: "bg-destructive text-foreground",
  };

  const stateClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer hover:opacity-80";

  const classes = twMerge(
    "size-10 flex items-center justify-center rounded-md",
    variantClasses[variant],
    stateClasses,
    className,
  );

  return (
    <button {...props} className={classes}>
      {icon}
    </button>
  );
}
