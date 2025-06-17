import { TituloStyle } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const TituloAvatar = (props: Props) => (
  <TituloStyle fontSize={props.fontSize}>{props.children}</TituloStyle>
)

export default TituloAvatar
