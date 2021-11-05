import React, { FC, SVGProps } from 'react'

const LanguageIcon: FC<{}> = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} />
      <path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z' />
    </svg>
  )
}

export default LanguageIcon
