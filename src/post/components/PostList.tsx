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
              <img className={styles.post__thumbnail} src={post.heroImage} alt={post.title}/>
              <h4 className={styles.post__title}>{post.title}</h4>
              <p className={styles.post__description}>{post.description}</p>
              <span className={styles.post__button} role="button">Leer &#8594;</span>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
