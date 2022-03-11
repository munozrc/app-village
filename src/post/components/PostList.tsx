import { Link } from 'react-router-dom'

import listPosts from '../../post/data.json'

import styles from './PostList.module.css'

export const PostList = () => {
  return (
    <ul className={styles.postList}>
      {
        listPosts.slice(0, 4).map(post => (
          <li key={post.id} className={styles.post__wrapper}>
            <Link to={`/posts/${post.path}`} className={styles.post__content}>
              <h4 className={styles.post__title}>{post.title}</h4>
              <p className={styles.post__description}>Puedes encontrar algunos sitios y tips para realizar una buena consulta de fuentes como articulos o publicaciones.</p>
              <span className={styles.post__button} role="button">Leer &#8594;</span>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
