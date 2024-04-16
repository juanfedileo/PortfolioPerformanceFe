import React from "react";

const GbpFlag = () => {
  return (
    <svg
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 me-2"
      viewBox="0 0 20 15"
    >
      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
      <g mask="url(#a)">
        <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M-.898-.842L7.467 4.8V-.433h4.666V4.8l8.365-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.044-1.548 6.614-4.46H0V5.166h4.672L-1.942.706-.898-.842z"
          clipRule="evenodd"
        />
        <path
          stroke="#DB1F35"
          strokeLinecap="round"
          strokeWidth=".667"
          d="M13.068 4.933L21.933-.9M14.009 10.088l7.948 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.19 6.093"
        />
        <path
          fill="#E6273E"
          fillRule="evenodd"
          d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default GbpFlag;
