import styled from 'styled-components'

export const Links = styled.ul`
  padding-bottom: 24px;


  li {
    padding-bottom: 3px;

    img {
      border-radius: 10px;
    }

    &:hover {
      opacity: 50%;

    @media (max-width: 768px) {
      display: inline-block;
      margin-right: 8px;
    }
  }
`
