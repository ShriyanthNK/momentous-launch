type ScoreGaugeProps = {
  score: number;
};

export default function ScoreGauge({ score }: ScoreGaugeProps) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  return (
    <div className="relative flex h-56 w-56 items-center justify-center">
      <div className="absolute h-40 w-40 rounded-full bg-coral/20 blur-3xl" />
      <svg width="200" height="200" viewBox="0 0 200 200" className="-rotate-90">
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="rgba(245,239,230,0.1)"
          strokeWidth="12"
        />
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#F2836B"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${progress} ${circumference}`}
          className="transition-[stroke-dasharray] duration-700 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-serif text-5xl font-semibold text-coral">
          {score}%
        </span>
        <span className="mt-1 text-sm text-cream/60">honest signal score</span>
      </div>
    </div>
  );
}
