import { useState, useEffect, RefObject, Dispatch, SetStateAction, useRef } from "react"

type ReturnType = [
  RefObject<any>,
  boolean,
  Dispatch<SetStateAction<boolean>>
]

function useDetectOutsideClick (initialState: boolean): ReturnType {
  const element = useRef<HTMLElement>(null)
  const [isActive, setIsActive] = useState<boolean>(initialState)

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!element.current) return
      const target = event.target as HTMLElement
      const isClickInsideElement = element.current.contains(target)
      !isClickInsideElement && setIsActive(!isActive)
    };

    isActive && window.addEventListener('click', onClick)

    return () => window.removeEventListener('click', onClick)
  }, [isActive, element])

  return [element, isActive, setIsActive]
}

export default useDetectOutsideClick
