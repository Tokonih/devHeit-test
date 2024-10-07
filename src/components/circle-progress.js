export default function CircularProgress({ percentage }) {
  const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  return (
    <div className="circular-progress">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke=""
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#053559"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.5s ease 0s" }}
        />
      </svg>
      <div className="progress-text">
        <p className="m-0">{percentage}%</p>
        <p className="m-0">Complete</p>
      </div>
    </div>
  );
}
