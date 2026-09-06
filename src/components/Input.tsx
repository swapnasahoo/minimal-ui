import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  error?: boolean;
};

export default function Input({ error, className, ...props }: InputProps) {
  const borderClasses = error
    ? "border-destructive/80 focus:border-destructive"
    : "border-border focus:border-foreground";

  return (
    <input
      {...props}
      className={`bg-transparent text-foreground pl-4 w-full h-10 rounded-md outline-none transition-colors duration-200 ease-in border ${borderClasses} ${className ?? ""}`}
    />
  );
}
