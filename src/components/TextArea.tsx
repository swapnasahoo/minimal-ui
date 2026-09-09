import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TextAreaProps = ComponentProps<"textarea"> & {
  label?: string;
  error?: boolean;
};

export default function TextArea({
  label,
  error,
  className,
  ...props
}: TextAreaProps) {
  const borderClasses = error
    ? "border-destructive/80 focus:border-destructive"
    : "border-border focus:border-foreground";

  const classes = twMerge(
    "w-full min-h-20 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted outline-none rounded-md border border-border focus:border-foreground transition-colors duration-200 ease-in",
    borderClasses,
    className,
  );

  return (
    <div>
      {label && (
        <label className="text-foreground font-semibold mb-1">{label}</label>
      )}

      <textarea {...props} className={classes} />
    </div>
  );
}
