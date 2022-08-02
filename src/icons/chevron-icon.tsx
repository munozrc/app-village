interface SVGProps {
  size?: number
  color?: string
  variant: 'down' | 'up'
}

export const ChevronIcon = ({ size = 16, color = "currentColor", variant }: SVGProps) => (
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
    {variant === 'down' && <path d="m6 9 6 6 6-6" />}
    {variant === 'up' && <path d="m18 15-6-6-6 6" />}
  </svg>
)