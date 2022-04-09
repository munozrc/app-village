export const Shape = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={720}
    height={642}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={720}
      height={642}
    >
      <path fill="#C4C4C4" d="M0 0h720v642H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M100-175C44.772-175 0-130.228 0-75v222.728a99.999 99.999 0 0 0 42.023 81.478l22.569 16.06L1110.05 877.08c13.55-16.694 21.95-38.168 21.95-62.754V-75c0-55.228-44.77-100-100-100H100Z"
        fill="url(#b)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={1132}
        y1={877.08}
        x2={-206.205}
        y2={378.859}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5547ff" />
        <stop offset={1} stopColor="#61afef" />
      </linearGradient>
    </defs>
  </svg>
)
