"use client";
import { useEffect, useState } from "react";
const Progress = ({ popularity }) => {
  const popularityPercentage = (parseFloat(popularity) * 10).toFixed(2);
  const percentage = popularityPercentage.slice(0, 2);
  const [circumference] = useState(25 * 2 * Math.PI);
  const [percent, setPercent] = useState(percentage);
  useEffect(() => {
    setPercent(percentage);
  }, [percentage]);
  return (
    <div
      className={`relative flex justify-start items-center`}
      style={{ "--circumference": circumference, "--percent": percent }}
    >
      <svg
        className={`w-16 h-16 rounded-full bg-[#081C22] flex justify-center items-center `}
        aria-hidden="true"
      >
        <circle
          className="text-gray-800"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
          r={25}
          cx={32}
          cy={32}
        />
        <circle
          className={`${percent > 50 ? "text-yellow-300" : "text-green-500"}`}
          strokeWidth="3"
          style={{
            strokeDasharray: "var(--circumference)",
            strokeDashoffset: `calc(var(--circumference) - var(--percent) / 100 * var(--circumference))`,
          }}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={25}
          cx={32}
          cy={32}
        />
      </svg>
      <span className={`absolute text-sm text-white ml-5`}>{percent}%</span>
    </div>
  );
};
export default Progress;
