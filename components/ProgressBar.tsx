type ProgressBarProps = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-cream/10">
        <div
          className="h-full rounded-full bg-coral transition-[width] duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-3 text-xs text-cream/40">
        {current} of {total}
      </p>
    </div>
  );
}
