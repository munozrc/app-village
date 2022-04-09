import Link from "next/link"

import styles from "./PostList.module.css"

export const PostList = ({ list }) => {
  return (
    <ul className={styles.postList}>
      {
        list.slice(0, 4).map(post => (
          <li key={post.id} className={styles.post__wrapper}>
            <Link href={`/posts/${post.path}`}>
              <a className={styles.post__content}>
                <img className={styles.post__thumbnail} src={post.heroImage} alt={post.title}/>
                <h4 className={styles.post__title}>{post.title}</h4>
                <p className={styles.post__description}>{post.description}</p>
                <span className={styles.post__button} role="button">Leer &#8594;</span>
              </a>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
