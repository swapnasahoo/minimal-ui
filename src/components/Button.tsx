import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "destructive";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  disabled,
  onClick,
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-foreground text-primary",
    destructive: "bg-destructive text-foreground",
  };

  const stateClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const classes = `${variantClasses[variant]} ${stateClasses}`;

  return (
    <button
      className={`w-max-content px-8 py-1.5 ${classes} rounded-md font-medium`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
