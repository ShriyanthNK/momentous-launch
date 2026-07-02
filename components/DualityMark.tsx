type DualityMarkProps = {
  size?: number;
  className?: string;
};

export default function DualityMark({ size = 40, className }: DualityMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="duality-circle">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
        <linearGradient id="duality-split" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2836B" />
          <stop offset="46%" stopColor="#F2836B" />
          <stop offset="54%" stopColor="#F5EFE6" />
          <stop offset="100%" stopColor="#F5EFE6" />
        </linearGradient>
      </defs>
      <g clipPath="url(#duality-circle)">
        <rect width="100" height="100" fill="url(#duality-split)" />
      </g>
    </svg>
  );
}
