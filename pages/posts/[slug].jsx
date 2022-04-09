/* eslint-disable @next/next/no-img-element */
import path from "node:path"
import fs from "node:fs"

import ReactMarkdown from "react-markdown"
import Head from "next/head"

import { readPostContent } from "../../posts/helpers"
import { LinkRenderer } from "../../components/LinkRenderer"
import styles from "../../styles/PostPage.module.css"

export default function PostPage ({ date, title, heroImage, content, description }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title} - Post - Softlink</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <header>
        <p className={styles.post__date}>
          {date} <span className={styles.post__dot}></span> Post
        </p>
        <h2 className={styles.post__title}>{title}</h2>
        <img className={styles.post__image} src={heroImage} alt={title} />
      </header>
      <section className={styles.post__content}>
        <ReactMarkdown components={{ a: LinkRenderer }}>{content}</ReactMarkdown>
      </section>
    </div>
  )
}

export async function getStaticPaths () {
  const postPath = path.join("content/posts")
  const posts = fs.readdirSync(postPath)

  const paths = posts.map((slug) => ({
    params: {
      slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params: { slug } }) {
  const postPath = path.join(`content/posts/${slug}`)
  const post = await readPostContent(postPath, slug)
  const date = globalThis.Intl.DateTimeFormat("es", { dateStyle: "full" }).format(new Date(post.date))

  return {
    props: {
      ...post,
      date
    }
  }
}
