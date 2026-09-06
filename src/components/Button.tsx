import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "destructive";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  disabled,
  onClick,
  className,
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-foreground text-primary",
    destructive: "bg-destructive text-foreground",
  };

  const stateClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const classes = twMerge(
    `w-max-content px-8 py-1.5 rounded-md font-medium`,
    variantClasses[variant],
    stateClasses,
    className,
  );

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
