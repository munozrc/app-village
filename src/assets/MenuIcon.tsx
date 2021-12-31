import { FC, SVGProps } from 'react'

const MenuIcon: FC<{}> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  )
}

export default MenuIcon
