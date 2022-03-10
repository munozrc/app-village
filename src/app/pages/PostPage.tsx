import { useParams } from 'react-router'
import ReactMarkdown from 'react-markdown'

import { LinkRenderer } from '../components/LinkRenderer'
import listPosts from '../../post/data.json'

import styles from './PostPage.module.css'

const getDateTime = (date: string) => new window.Intl.DateTimeFormat('es', { dateStyle: 'full' }).format(new Date(date))

export const PostPage = () => {
  const { path } = useParams()
  const post = listPosts.find(post => post.path === path)

  if (typeof post === 'undefined') return null

  return (
    <div className={styles.container}>
      <header>
        <p className={styles.post__date}>
          {getDateTime(post.date)}
          <span className={styles.post__dot}></span>
          Post
        </p>
        <h2 className={styles.post__title}>{post.title}</h2>
        <img className={styles.post__image} src={post.heroImage} alt={post.title} />
      </header>
      <section className={styles.post__content}>
        <ReactMarkdown components={{ a: LinkRenderer }}>{post.content}</ReactMarkdown>
      </section>
    </div>
  )
}
