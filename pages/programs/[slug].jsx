import path from "node:path"
import fs from "node:fs"

import { useState } from "react"
import Head from "next/head"
import md from "markdown-it"

import { DownloadIcon, LanguageIcon, LinkIcon, PackageIcon, StorageIcon, SystemIcon } from "../../components/Icons"
import { readAllFilesInAFolder } from "../../program/helpers"
import { ComboBox } from "../../components/ComboBox"
import { Shape } from "../../components/Shape"
import styles from "../../styles/ProgramPage.module.css"

export default function ProgramPage ({ versions, icon, name, description, dev }) {
  const [activeVersion, setActiveVersion] = useState(0)

  const handleDownload = () => {
    window.open(versions[activeVersion].installer, "_blank")
  }

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{name} - Softlink</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Shape className={styles.shape} />
      <header className={styles.headerWrapper}>
        <section className={styles.headerInfo}>
          <img className={styles.infoIcon} src={icon} alt={`logo-${String(name)}`} />
          <h2 className={styles.infoName}>{name}</h2>
        </section>
        <p className={styles.headerDescription}>{description}</p>
      </header>
      <section className={styles.metadataWrapper}>
        <button className={styles.metadataButton} onClick={handleDownload}>
          <DownloadIcon />Descargar
        </button>
        <span className={styles.metadataItem}>
          <PackageIcon />
          <ComboBox
            changeValue={setActiveVersion}
            currentValue={activeVersion}
            name="versions"
            values={versions.map(({ name }) => name)}
          />
        </span>
        <span className={styles.metadataItem}>
          <SystemIcon />{versions[activeVersion].os}
        </span>
        <span className={styles.metadataItem}>
          <StorageIcon />{versions[activeVersion].size}
        </span>
        <span className={styles.metadataItem}>
          <LanguageIcon />{versions[activeVersion].language}
        </span>
        <span className={styles.metadataItem}>
          <LinkIcon />{dev}
        </span>
      </section>
      <section className={styles.contentWrapper}>
        <div dangerouslySetInnerHTML={{ __html: md().render(versions[activeVersion].content) }}></div>
      </section>
    </div>
  )
}

export async function getStaticPaths () {
  const programPath = path.join("content/programs")
  const programs = fs.readdirSync(programPath)

  const paths = programs.map((slug) => ({
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
  const programPath = path.join(`content/programs/${slug}`)
  const program = await readAllFilesInAFolder(programPath, slug)

  return {
    props: {
      ...program
    }
  }
}
