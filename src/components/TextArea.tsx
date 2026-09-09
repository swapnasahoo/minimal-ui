import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TextAreaProps = ComponentProps<"textarea">;

export default function TextArea({ className, ...props }: TextAreaProps) {
  const classes = twMerge(
    "w-full min-h-20 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted outline-none rounded-md border border-border focus:border-foreground transition-colors duration-200 ease-in",
    className,
  );

  return <textarea {...props} className={classes} />;
}
