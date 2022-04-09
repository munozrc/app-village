import Link from "next/link"

import { ArrowIcon } from "../components/Icons"

import styles from "./ProgramList.module.css"

export const ProgramList = ({ list }) => {
  return (
    <div className={styles.gridWrapper}>
      {list.map(({ id, icon, name, slug }) => (
        <Link key={id} href={`/programs/${slug}`} >
          <a className={styles.itemContainer}>
            <img className={styles.icon} src={icon} alt={name} />
            <h3 className={styles.title}>{name}</h3>
            <span className={styles.moreInfo}>
              <ArrowIcon />
                Más Información
              <ArrowIcon />
            </span>
          </a>
        </Link>
      ))}
    </div>
  )
}
