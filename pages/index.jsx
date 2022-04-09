import path from "node:path"

import Head from "next/head"

import { SectionLayout } from "../components/Layout"
import { readPrograms } from "../program/helpers"
import { ProgramList } from "../program/ProgramList"
import { PostList } from "../posts/PostList"
import styles from "../styles/Home.module.css"
import { readAllPost } from "../posts/helpers"

export default function Home ({ programs, posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio - Softlink</title>
        <meta name="description" content="Encontrarás diferentes enlaces de descargar de programas, al igual que publicaciones sobre informática" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <SectionLayout
        description="Estos son algunos de los programas más esenciales para dispositivos nuevos con Windows."
        href="/programas"
        title="Más Populares"
      >
        <ProgramList list={programs}/>
      </SectionLayout>
      <SectionLayout
        href="/posts"
        title="Ultimos posts"
      >
        <PostList list={posts} />
      </SectionLayout>
    </div>
  )
}

export async function getStaticProps () {
  const programPath = path.join("content/programs")
  const programs = await readPrograms(programPath)

  const postPath = path.join("content/posts")
  const posts = await readAllPost(postPath)

  return {
    props: {
      programs: programs.slice(0, 4),
      posts: posts.slice(0, 6)
    }
  }
}
