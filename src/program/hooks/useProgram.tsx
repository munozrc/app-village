import { useEffect, useState } from 'react'

import listPrograms from '../../data/programs.json'
import { Program } from '../types'

interface returnType {
  activeProgram: Program | undefined
  activeVersion: number
}

export const useProgram = (id: string | undefined): returnType => {
  const [activeProgram, setActiveProgram] = useState<Program | undefined>(undefined)
  const [activeVersion] = useState<number>(0)

  useEffect(() => {
    if (typeof id === 'undefined') return

    const current = listPrograms.find((program) => program.id === +id)
    setActiveProgram(() => current)
  }, [id])

  return {
    activeProgram,
    activeVersion
  }
}
