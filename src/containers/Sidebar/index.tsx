import { useState } from 'react'
import Avatar from '../../components/Avatar'
//import Paragrafo from '../../components/Paragrafo'
import Contatos from '../../components/Contatos'
import TituloAvatar from '../../components/TituloAvatar'

import { useTranslation } from 'react-i18next'
import '../../i18n'

import {
  Descrição,
  BotaoTema,
  SidebarContainer,
  BtnLanguage,
  ContainerLanguage
} from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => {
  const { t, i18n } = useTranslation()
  const [idiomaAtivo, setIdiomaAtivo] = useState(i18n.language)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIdiomaAtivo(lng)
  }

  return (
    <aside>
      {/*SidebarContainer, é uma div para prender o Sidebar no topo da pagina com sticky*/}
      <SidebarContainer>
        <Avatar />
        <TituloAvatar fontSize={20}>Fernando Silva</TituloAvatar>
        {/*<Paragrafo tipo="secundario" fontSize={16}>
          FernandoSilvaDev
        </Paragrafo>*/}
        <Descrição tipo="secundario" fontSize={12}>
          {t('SubTitulo')}
        </Descrição>
        <ContainerLanguage>
          <BtnLanguage
            className={idiomaAtivo === 'pt' ? 'ativo' : ''}
            onClick={() => changeLanguage('pt')}
          >
            PT
          </BtnLanguage>
          <p>|</p>
          <BtnLanguage
            className={idiomaAtivo === 'en' ? 'ativo' : ''}
            onClick={() => changeLanguage('en')}
          >
            EN
          </BtnLanguage>
        </ContainerLanguage>
        <Contatos />
        <BotaoTema onClick={props.trocaTema}>{t('sidebar.tema')}</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
