

export const VegIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="22"
      height="22"
      fill="white"
      stroke="green"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="6" fill="green" />
  </svg>
);

export const NonVegIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="22"
      height="22"
      fill="white"
      stroke="brown"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="6" fill="brown" />
  </svg>
);
