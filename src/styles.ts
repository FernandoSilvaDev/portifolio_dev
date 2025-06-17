import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    list-style: none;
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-image: ${(props) => props.theme.corFundo};

    @media (max-width: 768px) {
      padding-top: 32px
    }
  }
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1524px;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 190px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  @media (max-width: 1024px) {
    max-width: 90%;
  }
`
