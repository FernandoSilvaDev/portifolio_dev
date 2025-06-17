import Titulo from '../Titulo'
import { Links } from './styles'

import { useTranslation } from 'react-i18next'
import '../../i18n'

const Contatos = () => {
  const { t } = useTranslation()

  return (
    <Links>
      <Titulo fontSize={16}>{t('Contatos.contato')}</Titulo>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/artfernando-silva/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/FernandoSilvaDev"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
          </a>
        </li>
        <li>
          <a
            href="mailto:artfernando.carlos@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
          </a>
        </li>
      </ul>
    </Links>
  )
}

export default Contatos
