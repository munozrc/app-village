import React, { FC, SVGProps } from 'react'

const SystemIcon: FC<{}> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth={2}
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      height='1em'
      width='1em'
      {...props}
    >
      <rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
      <path d='M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3' />
    </svg>
  )
}

export default SystemIcon
