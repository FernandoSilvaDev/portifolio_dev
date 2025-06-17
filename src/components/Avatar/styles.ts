import styled from 'styled-components'

export const FotoPerfil = styled.img`
  max-width: 100%;
  border-radius: 50%;
  margin-bottom: 24px;
  box-shadow:
    0 0 80px #4fc3dc4d,
    0 0 30px #4fc3dc;

  &:hover {
    .animate__animated animate__rubberBand {
    active
    }
  }

  @media (max-width: 768px) {
    width: 128px;
    height: 128px;
  }
`
