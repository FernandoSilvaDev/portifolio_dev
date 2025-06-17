import { FotoPerfil } from './styles'
import { useState } from 'react'
import 'animate.css'

const Avatar = () => {
  const [hover, setHover] = useState(false)

  return (
    <FotoPerfil
      className={`meu-elemento ${hover ? 'animate__animated animate__rubberBand' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      src="https://github.com/FernandoSilvaDev.png"
    />
  )
}

export default Avatar
