interface SVGProps {
  size?: number
  color?: string
}

export const CloseIcon = ({ size = 16, color = "currentColor" }: SVGProps) => (
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
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)