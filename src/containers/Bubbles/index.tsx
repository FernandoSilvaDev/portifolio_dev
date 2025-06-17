import { ContainerBubbles } from './styles'
import React, { useEffect, useRef } from 'react'

type Props = {
  children?: React.ReactNode
}

const Bubbles: React.FC<Props> = ({ children }) => {
  const bubblesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bubblesRef.current) return

    const numBubbles =
      window.innerWidth > 1024 ? 22 : window.innerWidth > 768 ? 10 : 4
    bubblesRef.current.innerHTML = '' // Limpa as bolhas anteriores

    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement('span')
      bubble.style.setProperty('--i', `${Math.random() * 60}`)
      bubble.style.position = 'fixed' // Mantém posição fixa
      bubble.style.top = `${Math.random() * 100}vh` // Distribui na altura da tela
      bubble.style.left = `${Math.random() * 100}vw` // Espalha horizontalmente pela tela
      bubblesRef.current.appendChild(bubble)
    }
  }, [])

  document.querySelectorAll('.bubbles span').forEach((bubble) => {
    ;(bubble as HTMLElement).style.transform = 'translateY(50px)' // Deve mover 50px para baixo
  })

  // 📜 Movimento das bolhas ao scrollar
  useEffect(() => {
    const handleScroll = () => {
      if (!bubblesRef.current) return

      bubblesRef.current.querySelectorAll('span').forEach((bubble, index) => {
        const speed = (index % 5) + 1
        ;(bubble as HTMLElement).style.transform =
          `translateY(${window.scrollY / speed}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  setTimeout(() => {
    document.querySelectorAll('.bubbles span').forEach((bubble, index) => {
      const speed = (index % 5) + 1
      ;(bubble as HTMLElement).style.transform =
        `translateY(${window.scrollY / speed}px)`
    })
  }, 100)

  return (
    <ContainerBubbles>
      <div className="bubbles" ref={bubblesRef}>
        {children}
      </div>
    </ContainerBubbles>
  )
}

export default Bubbles
