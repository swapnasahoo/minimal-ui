import { twMerge } from "tailwind-merge";

type ProgressBarProps = {
  value: number;
  max: number;
  trackColor?: string;
  barColor?: string;
  rounded?: boolean;
  height?: number;
};

export default function ProgressBar({
  value,
  max,
  trackColor,
  barColor,
  rounded = true,
  height,
}: ProgressBarProps) {
  const progress = Math.floor((value / max) * 100);

  const trackClasses = twMerge(
    "w-full bg-background/90",
    rounded && "rounded-full",
    height ? `h-${height}` : "h-2",
    trackColor,
  );

  const barClasses = twMerge(
    `w-[${progress}%] bg-foreground`,
    rounded && "rounded-full",
    height ? `h-${height}` : "h-full",
    barColor,
  );

  return (
    <div className={trackClasses}>
      <div className={barClasses}></div>
    </div>
  );
}
