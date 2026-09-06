import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentProps<"input"> & {
  error?: boolean;
};

export default function Input({ error, className, ...props }: InputProps) {
  const borderClasses = error
    ? "border-destructive/80 focus:border-destructive"
    : "border-border focus:border-foreground";

  const classes = twMerge(
    "bg-transparent text-foreground pl-4 w-full h-10 rounded-md outline-none transition-colors duration-200 ease-in border",
    className,
    borderClasses,
  );

  return <input {...props} className={classes} />;
}
