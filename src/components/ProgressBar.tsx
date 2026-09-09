import { twMerge } from "tailwind-merge";

type ProgressBarProps = {
  value: number;
  max: number;
  trackColor?: string;
  barColor?: string;
  rounded?: boolean;
  height?: number;
  showPercentage?: boolean;
  title?: string;
  trackClassName?: string;
  barClassName?: string;
};

export default function ProgressBar({
  value,
  max,
  trackColor,
  barColor,
  rounded = true,
  height,
  showPercentage,
  title,
  trackClassName,
  barClassName,
}: ProgressBarProps) {
  const progress = Math.floor((value / max) * 100);

  const trackClasses = twMerge(
    "w-full bg-background/90",
    rounded && "rounded-full",
    height ? `h-${height}` : "h-2",
    trackColor,
    trackClassName,
  );

  const barClasses = twMerge(
    `w-[${progress}%] bg-foreground`,
    rounded && "rounded-full",
    height ? `h-${height}` : "h-full",
    barColor,
    barClassName,
  );

  return (
    <div>
      {title && <p className="text-foreground font-medium">{title}</p>}

      <div className="flex flex-row items-center gap-1">
        <div className={trackClasses}>
          <div className={barClasses}></div>
        </div>

        {showPercentage && (
          <p className="text-foreground font-medium text-sm">{progress}%</p>
        )}
      </div>
    </div>
  );
}
