import { FC, useState } from 'react'
import { useParams } from 'react-router'
import { Program } from '../../types'
import ReactMarkdown from 'react-markdown'

import PackageIcon from '../../assets/PackageIcon'
import SystemIcon from '../../assets/SystemIcon'
import StorageIcon from '../../assets/StorageIcon'
import LanguageIcon from '../../assets/LanguageIcon'
import LinkIcon from '../../assets/LinkIcon'
import DownloadIcon from '../../assets/DownloadIcon'

import ComboBox from '../../components/ComboBox'
import ShapeSVG from './shape.svg'
import programs from '../../data/programs.json'

import styles from './styles.module.css'

const SingleProgram: FC<{}> = () => {
  const { id } = useParams<{id: string}>()
  const [currentVersion, setCurrentVersion] = useState<number>(0)
  const currentProgram: Program | undefined = programs.find((ele) => ele.id === parseInt(id))

  const handleDownload = (): void => {
    if (typeof currentProgram === 'undefined') return
    window.open(currentProgram.versions[currentVersion].installer, '_blank')
  }

  if (typeof currentProgram === 'undefined') return <h4>404</h4>
  const { versions, icon, name, description, dev } = currentProgram

  return (
    <div className={styles.wrapper}>
      <object type="image/svg+xml" data={ShapeSVG} className={styles.shape} />
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
            changeValue={setCurrentVersion}
            currentValue={currentVersion}
            name="versions"
            values={versions.map(({ name }) => name)}
          />
        </span>
        <span className={styles.metadataItem}>
          <SystemIcon />{versions[currentVersion].os}
        </span>
        <span className={styles.metadataItem}>
          <StorageIcon />{versions[currentVersion].size}
        </span>
        <span className={styles.metadataItem}>
          <LanguageIcon />{versions[currentVersion].language}
        </span>
        <span className={styles.metadataItem}>
          <LinkIcon />{dev}
        </span>
      </section>
      <section className={styles.contentWrapper}>
        <ReactMarkdown>{versions[currentVersion].content}</ReactMarkdown>
      </section>
    </div>
  )
}

export default SingleProgram
