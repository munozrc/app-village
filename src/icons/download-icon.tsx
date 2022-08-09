interface SVGProps {
  size?: number
  color?: string
}

export const DownloadIcon = ({ size = 16, color = "currentColor" }: SVGProps) => {
  return (
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
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  )
}