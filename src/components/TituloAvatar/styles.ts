import styled from 'styled-components'

export type Props = {
  children: string
  fontSize?: number
}

export const TituloStyle = styled.h1<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weeight: bold;
  margin-bottom: 16px;
`
