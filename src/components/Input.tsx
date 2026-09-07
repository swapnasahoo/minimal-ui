import { Eye, EyeOff } from "lucide-react";
import { useState, type ComponentProps, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentProps<"input"> & {
  error?: boolean;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
};

export default function Input({
  error,
  icon,
  trailingIcon,
  className,
  ...props
}: InputProps) {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

  const isPassword = props.type === "password";
  const inputType = isPassword && isPasswordShown ? "text" : props.type;

  const borderClasses = error
    ? "border-destructive/80 focus:border-destructive"
    : "border-border focus:border-foreground";

  const classes = twMerge(
    "bg-transparent text-foreground w-full h-10 rounded-md outline-none transition-colors duration-200 ease-in border",
    icon ? "pl-10" : "pl-4",
    className,
    borderClasses,
  );

  return (
    <div className="relative">
      <input {...props} type={inputType} className={classes} />
      {/* icon (starting) */}
      {icon && (
        <span className="absolute text-foreground top-2 left-3">{icon}</span>
      )}

      <button
        onClick={() => setIsPasswordShown(!isPasswordShown)}
        className="absolute text-foreground top-2 right-3 cursor-pointer"
      >
        {isPassword && (isPasswordShown ? <Eye /> : <EyeOff />)}
      </button>

      {/* icon (ending) */}
      {trailingIcon && (
        <span className="absolute text-foreground top-2 right-3">
          {trailingIcon}
        </span>
      )}
    </div>
  );
}
