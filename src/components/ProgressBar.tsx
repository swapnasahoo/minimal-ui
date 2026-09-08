import { twMerge } from "tailwind-merge";

type ProgressBarProps = {
  value: number;
  max: number;
  trackColor?: string;
  barColor?: string;
};

export default function ProgressBar({
  value,
  max,
  trackColor,
  barColor,
}: ProgressBarProps) {
  const progress = Math.floor((value / max) * 100);

  const trackClasses = twMerge(
    "w-full h-2 bg-background/90 rounded-full",
    trackColor,
  );

  const barClasses = twMerge(
    `w-[${progress}%] h-full bg-foreground rounded-full`,
    barColor,
  );

  return (
    <div className={trackClasses}>
      <div className={barClasses}></div>
    </div>
  );
}
