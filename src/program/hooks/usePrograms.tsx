import listPrograms from '../../data/programs.json'
import { Program } from '../../types'

interface returnType {
  listPrograms: Program[],
  normalizeListItems: () => Array<{ id: number, icon: string, name: string }>
}

export const usePrograms = (): returnType => {
  const normalizeListItems = () => {
    return listPrograms.map((item) => ({
      id: item.id,
      icon: item.icon,
      name: item.name
    }))
  }

  return {
    listPrograms,
    normalizeListItems
  }
}
