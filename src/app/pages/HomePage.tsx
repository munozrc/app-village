import { PostList } from '../../post/components/PostList'
import { ItemList } from '../../program/components'
import { usePrograms } from '../../program/hooks'
import { SectionLayout } from '../components/SectionLayout'

import styles from './HomePage.module.css'

export const HomePage = () => {
  const { listPrograms } = usePrograms()
  return (
    <div className={styles.container}>
      <SectionLayout
        description="Estos son algunos de los programas más esenciales para dispositivos nuevos con Windows."
        href="/programs"
        title="Más Populares"
      >
        <ItemList items={listPrograms.slice(0, 4)} />
      </SectionLayout>
      <SectionLayout
        href="/posts"
        title="Ultimos posts"
      >
        <PostList />
      </SectionLayout>
    </div>
  )
}
