import React, { FC, SVGProps } from 'react'

const PackageIcon: FC<{}> = (props: SVGProps<SVGSVGElement>) => {
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
      <path d='M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
      <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
    </svg>
  )
}

export default PackageIcon
