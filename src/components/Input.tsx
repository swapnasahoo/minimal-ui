import { Eye, EyeOff } from "lucide-react";
import { useState, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentProps<"input"> & {
  error?: boolean;
};

export default function Input({ error, className, ...props }: InputProps) {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

  const isPassword = props.type === "password";
  const inputType = isPassword && isPasswordShown ? "text" : props.type;

  const borderClasses = error
    ? "border-destructive/80 focus:border-destructive"
    : "border-border focus:border-foreground";

  const classes = twMerge(
    "bg-transparent text-foreground pl-4 w-full h-10 rounded-md outline-none transition-colors duration-200 ease-in border",
    className,
    borderClasses,
  );

  return (
    <div className="relative">
      <input {...props} type={inputType} className={classes} />

      <button
        onClick={() => setIsPasswordShown(!isPasswordShown)}
        className="absolute text-foreground top-2 right-3 cursor-pointer"
      >
        {isPassword && (isPasswordShown ? <Eye /> : <EyeOff />)}
      </button>
    </div>
  );
}
