import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import Bubbles from './containers/Bubbles'

function App() {
  const [useThemeDark, setUseThemeDark] = useState(true)
  function trocaTema() {
    setUseThemeDark(!useThemeDark)
  }
  return (
    <ThemeProvider theme={useThemeDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Bubbles />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
