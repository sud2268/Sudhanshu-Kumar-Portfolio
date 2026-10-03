import { useEffect, useState } from 'react'
import { sectionIds } from '../data/navigation.ts'

export function useActiveSection() {
  const [active, setActive] = useState<string>(sectionIds[0])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const current = visible[0]
        if (current?.target.id) setActive(current.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    for (const element of elements) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return active
}
