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

const temaLight: DefaultTheme = {
  corPrincipal: '#282a35',
  corSecundario: '#949494',
  corFundo: 'linear-gradient(90deg, #12CBC4, white, #12CBC4)',
  corFundoBotão: '#4476bf',
  corBorda: '#c1c1c1',
  corBubble: '##f5f6fa',
  corBtnTema: '#4476bf',
  corBtnTemaHover: '#A3CB38'
}

export default temaLight
