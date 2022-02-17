import { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import listPrograms from '../data.json'
import { ItemElement, Program } from '../types'

interface returnType {
  listPrograms: Program[]
  programSearchList: ItemElement[]
  handleSubmitSearch: (event: FormEvent<HTMLFormElement>) => void
}

export const usePrograms = (): returnType => {
  const [searchParams, setSearchParams] = useSearchParams()

  const normalizeListPrograms = () => {
    const programSearch = searchParams.get('search_query')?.toLowerCase() ?? ''
    const newList = listPrograms.map((item) => ({
      id: item.id,
      icon: item.icon,
      name: item.name
    }))

    if (programSearch !== '') return newList.filter(({ name }) => name.toLowerCase().includes(programSearch))
    return newList
  }

  const handleSubmitSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const searchValue = formData.get('search') as string

    setSearchParams(searchValue !== '' ? { search_query: searchValue } : {})
  }

  return {
    listPrograms,
    programSearchList: normalizeListPrograms(),
    handleSubmitSearch
  }
}
