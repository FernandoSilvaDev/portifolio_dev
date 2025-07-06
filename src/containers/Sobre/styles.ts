import styled from 'styled-components'

export const SobreMim = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;

  img {
    height: 157px;
  }
  @media (max-width: 768px) {
    img {
      width: 100vw;
      height: auto;
      object-fit: cover;
      max-width: 100%;
    }
  }
`

export const SaibaMais = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #9980fa;
  font-weight: bold;
`

export const ContainerIcons = styled.div`
  overflow: hidden;
  position: relative;

  .icons {
    padding-top: 0px;

    @media (max-width: 768px) {
      display: block;
      justify-content: center;
    }

    img {
      display: inline_block;
      align-items: center;
      max-height: 30px;
      max-width: 40px;
      margin-bottom: 16px;
      margin-right: 16px;
    }
  }
`
