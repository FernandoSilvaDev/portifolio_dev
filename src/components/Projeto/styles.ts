import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.corBorda};
  border-radius: 10px;
  padding: 16px;
  max-height: 560vh;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  will-change: transform;

  p:first-of-type {
    font-weight: bold;
  }

  &:hover {
    box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.08) !important;
  }

  .imagem-container {
    position: relative;
    width: 100%;
  }

  .imagem-principal {
    width: 100%;
    transition: opacity 0.5s ease-in-out;
  }

  .imagem-extra {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover .imagem-extra {
    opacity: 1;
  }

  &:hover .imagem-principal {
    opacity: 0;
  }

  img {
    margin-top: 16px;
    max-width: 100%;
  }
`
export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corFundoBotão};
  text-decoration: none;
  padding: 8px;
  display: inline-block; // Para que o botão saia de cima e a largura não expande.
  margin-top: 24px;
  border-radius: 10px;
  margin-right: 14px;

  &:hover {
    background-color: rgb(86, 148, 241);
  }
`

export const SaibaMais = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #9980fa;
  font-weight: bold;
`
