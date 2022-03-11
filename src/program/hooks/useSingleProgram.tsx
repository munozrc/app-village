import { useEffect, useState } from 'react'

import listPrograms from '../data.json'
import { Program } from '../types'

interface returnType {
  activeProgram: Program | undefined
  activeVersion: number
  changeActiveVersion: (value: number) => void
}

export const useSingleProgram = (id: string | undefined): returnType => {
  const [activeProgram, setActiveProgram] = useState<Program | undefined>(undefined)
  const [activeVersion, setActiveVersion] = useState<number>(0)

  useEffect(() => {
    if (typeof id === 'undefined') return

    const current = listPrograms.find((program) => program.id === +id)
    setActiveProgram(() => current)
  }, [id])

  const changeActiveVersion = (value: number) => {
    setActiveVersion(() => value)
  }

  return {
    activeProgram,
    activeVersion,
    changeActiveVersion
  }
}