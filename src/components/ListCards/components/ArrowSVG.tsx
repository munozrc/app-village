import React, { FC, SVGProps } from 'react'

const ArrowSVG: FC<{}> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth={0}
      viewBox='0 0 512 512'
      height='1em'
      width='1em'
      {...props}
    >
      <path
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={48}
        d='M184 112l144 144-144 144'
      />
    </svg>
  )
}

export default ArrowSVG
