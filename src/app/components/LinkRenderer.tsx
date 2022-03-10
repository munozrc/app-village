import { AnchorHTMLAttributes } from 'react'

export const LinkRenderer = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  )
}
