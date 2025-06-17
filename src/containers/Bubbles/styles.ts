import styled from 'styled-components'

export const ContainerBubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 200vh;
  z-index: -1;

  .bubbles {
    position: relative;
    display: flex;
  }

  .bubbles span {
    will-change: transform;
    position: fixed;
    width: 100px;
    height: 100px;
    background: ${(props) => props.theme.corBubble};
    margin: 0 2px;
    border-radius: 50%;
    box-shadow:
      inset 5px 5px 10px #4fc3dc10,
      inset 0 0 50px #4fc3dc4D,
      0 0 100px #4fc3dc;
    animation: animate 25s linear infinite;
    animation-duration: calc(525s / var(--i));
  }

  .bubbles span:nth-child(even) {
    background: ${(props) => props.theme.corBubble};
    box-shadow:
      inset 5px 5px 10px #ff2d7544,
       inset 0 0 50px #ff2d754D,
      0 0 100px #ff2d75;

  @keyframes animate {
    0% {
      transform: translateY(100vh) scale(0);
    }

    100% {
      transform: translateY(-50vh) scale(1);
    }
  }

@media (max-width: 768px) {
  .bubbles span:nth-child(n+10) {
    display: none;
  }
}


`
