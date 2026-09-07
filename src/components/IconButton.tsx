import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type IconButtonProps = ComponentProps<"button"> & {
  icon: ReactNode;
};

export default function IconButton({
  icon,
  className,
  ...props
}: IconButtonProps) {
  const classes = twMerge(
    "bg-background/80 size-10 flex items-center justify-center rounded-md text-foreground border border-border/20 cursor-pointer",
    className,
  );

  return (
    <button {...props} className={classes}>
      {icon}
    </button>
  );
}
