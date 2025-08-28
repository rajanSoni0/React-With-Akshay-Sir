// StatusIcons.js

import React from "react";

// Online Icon (Green dot with glow)
export const OnlineIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="white" stroke="green" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" fill="limegreen">
      <animate
        attributeName="r"
        values="5;6;5"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

// Offline Icon (Grey dot with border)
export const OfflineIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="white" stroke="gray" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" fill="gray" />
  </svg>
);
