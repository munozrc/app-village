import { Link } from 'react-router-dom'

import { Post } from '../types'

export const PostItem = ({ path, title }: Post) => {
  return (
    <Link to={`/posts/${path}`}>
      <h4>{title}</h4>
    </Link>
  )
}
