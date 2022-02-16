import { useSearchParams } from 'react-router-dom'

import listPrograms from '../../data/programs.json'
import { Program } from '../../types'

interface returnType {
  listPrograms: Program[],
  normalizeListItems: () => Array<{ id: number, icon: string, name: string }>
}

export const usePrograms = (): returnType => {
  const [searchParams] = useSearchParams()

  const normalizeListItems = () => {
    const programSearch = searchParams.get('search_query')?.toLowerCase() ?? ''
    const programs = listPrograms.map((item) => ({
      id: item.id,
      icon: item.icon,
      name: item.name
    }))

    if (programSearch !== '') return programs.filter(item => item.name.toLowerCase().includes(programSearch))
    return programs
  }

  return {
    listPrograms,
    normalizeListItems
  }
}
