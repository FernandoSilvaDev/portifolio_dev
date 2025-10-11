import { useState } from 'react'

import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao, SaibaMais } from './styles'

import { useTranslation } from 'react-i18next'
import '../../i18n'

interface ProjetoProps {
  titulo: string
  tecnologias?: string
  descricao?: string
  link?: string
  linkGit?: string
  imagem: string
  imagemExtra?: string
}

const MAX_CARACTERES = 46

const Projeto = ({
  titulo,
  tecnologias,
  descricao = '',
  link,
  linkGit,
  imagem,
  imagemExtra
}: ProjetoProps) => {
  const { t } = useTranslation()
  const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false)

  const descricaoTruncada =
    descricao.length > MAX_CARACTERES
      ? descricao.substring(0, MAX_CARACTERES) + '...'
      : descricao

  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Paragrafo tipo="secundario">{tecnologias}</Paragrafo>
      <Paragrafo tipo="secundario">
        {mostrarTextoCompleto ? descricao : descricaoTruncada}
        {descricao.length > MAX_CARACTERES && !mostrarTextoCompleto && (
          <SaibaMais onClick={() => setMostrarTextoCompleto(true)}>
            {t('SaibaMais')}
          </SaibaMais>
        )}
      </Paragrafo>
      <div className="imagem-container">
        {imagem && (
          <img className="imagem-principal" src={imagem || ''} alt={titulo} />
        )}
        {imagemExtra && (
          <img className="imagem-extra" src={imagemExtra || ''} alt={titulo} />
        )}
      </div>
      {/* Condição caso o botão não tenha link o botão não é rederizado. */}
      {link && link.trim() !== '' && (
        <LinkBotao href={link} target="_blank">
          {t('Visualizar')}
        </LinkBotao>
      )}
      <LinkBotao href={linkGit} target="_blank">
        {t('LinkGit')}
      </LinkBotao>
    </Card>
  )
}

export default Projeto
