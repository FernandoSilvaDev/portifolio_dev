import 'animate.css'
import { useState } from 'react'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao, SaibaMais, ContainerIcons, SobreMim } from './styles'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import { useTranslation } from 'react-i18next'
import '../../i18n'

const Sobre = () => {
  const { t } = useTranslation()
  const [expandido, setExpandido] = useState(false)
  const textoCompleto = t('Sobre')

  const textoResumido = `${textoCompleto.slice(0, 600)}... `

  return (
    <section>
      <Titulo fontSize={16}>{t('Sobre.mim')}</Titulo>
      <SobreMim>
        <Paragrafo tipo="principal">
          {expandido ? textoCompleto : textoResumido}
          {!expandido && (
            <SaibaMais onClick={() => setExpandido(true)}>
              {t('SaibaMais')}
            </SaibaMais>
          )}
        </Paragrafo>

        <GithubSecao>
          <DotLottieReact
            src="https://lottie.host/ea89bb3d-26b4-4bef-b8cd-5432c0a13920/VJI6BQeI2n.lottie"
            loop
            autoplay
            style={{ padding: '0', margin: '0', width: 'auto', height: 'auto' }}
          />
        </GithubSecao>
      </SobreMim>

      <ContainerIcons>
        <div className="icons animate__animated animate__slideInLeft">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/grunt/grunt-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cypressio/cypressio-original.svg" />
        </div>
      </ContainerIcons>
    </section>
  )
}

export default Sobre
