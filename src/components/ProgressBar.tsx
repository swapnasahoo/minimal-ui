import { twMerge } from "tailwind-merge";

type ProgressBarProps = {
  value: number;
  max: number;
  barColor?: string;
};

export default function ProgressBar({
  value,
  max,
  barColor,
}: ProgressBarProps) {
  const progress = Math.floor((value / max) * 100);

  const barClasses = twMerge(
    `w-[${progress}%] h-full bg-foreground rounded-full`,
    barColor,
  );

  return (
    <div className="w-full h-2 bg-background/90 rounded-full">
      <div className={barClasses}></div>
    </div>
  );
}
