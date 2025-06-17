import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string
    corSecundario: string
    corFundo: string
    corFundoBotão: string
    corBorda: string
    corBubble: string
    corBtnTema: string
    corBtnTemaHover: string
  }
}

const temaDark: DefaultTheme = {
  corPrincipal: '#A3CB38',
  corSecundario: '#949494',
  corFundo: 'linear-gradient(90deg, black, #282a35, black)',
  corFundoBotão: '#D980FA',
  corBorda: '#A3CB38',
  corBubble: '#282a35',
  corBtnTema: '#A3CB38',
  corBtnTemaHover: '#4476bf'
}

export default temaDark
