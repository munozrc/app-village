
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

import { ComboBox } from '../../components/ComboBox'
import { DownloadIcon, LanguageIcon, LinkIcon, PackageIcon, StorageIcon, SystemIcon } from '../../components/Icons'
import { Shape } from '../../components/Shape'
import { useSingleProgram } from '../../program/hooks'

import styles from './ProgramPage.module.css'

export const ProgramPage = () => {
  const { id } = useParams()
  const { activeProgram, activeVersion, changeActiveVersion } = useSingleProgram(id)

  const handleDownload = (): void => {
    if (typeof activeProgram === 'undefined') return
    window.open(activeProgram.versions[activeVersion].installer, '_blank')
  }

  if (typeof activeProgram === 'undefined') return <h4>404</h4>

  const { versions, icon, name, description, dev } = activeProgram

  return (
    <div className={styles.wrapper}>
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
            changeValue={changeActiveVersion}
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
        <ReactMarkdown>{versions[activeVersion].content}</ReactMarkdown>
      </section>
    </div>
  )
}
