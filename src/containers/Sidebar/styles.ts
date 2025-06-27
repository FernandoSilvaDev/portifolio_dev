import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descrição = styled(P)`
  margin-top: 24px;
  margin-bottom: 30px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corFundo};
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corBtnTema};
  cursor: pointer;
  border: none;
  margin-bottom: 24px;

  &:hover {
    background-color: ${(props) => props.theme.corBtnTemaHover};
  }
`

export const BtnLanguage = styled.button`
  border-radius: 10px;
  padding: 6px 10px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  border: none;

  &.ativo {
    background-color: ${(props) => props.theme.corBtnTema};
  }
`

export const ContainerLanguage = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  margin-bottom: 22px;

  p {
    margin: 8px;
  }
`

//Para que a Sidebar fique fixa no topo da pagina e acompanhe na rolagem.
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
