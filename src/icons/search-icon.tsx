interface SVGProps {
  size?: number
  color?: string
}

export const SearchIcon = ({ size = 16, color = "currentColor" }: SVGProps) => (
  <svg
    stroke={color}
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={size}
    width={size}
  >
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.35-4.35" />
  </svg>
)