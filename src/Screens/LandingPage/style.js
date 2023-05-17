import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background: #999;


  a{
    :visited{
      color: #fff;
    }
  }

  @keyframes moveUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100px);
    }
  }

  @keyframes moveDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100px);
    }
  }

  @keyframes moveLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100px);
    }
  }

  @keyframes moveRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100px);
    }
  }

  @keyframes moveDiagonal {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(100px, 100px);
    }
  }

  .portfolio-letter {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }

  .portfolio-letter-p {
    animation-name: moveUp;
  }

  .portfolio-letter-o {
    animation-name: moveDown;
  }

  .portfolio-letter-r {
    animation-name: moveDiagonal;
  }
`;

export const Text = styled.p`
  position: relative;

  :hover {
    color: #00ffff;
    cursor: pointer;
    :after{
      width: 100%;
    }
  }

  :after {
    content: "";
    transition: width 0.5s;
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -10px;
    left: 0;
    background: #00ffff;
  }
`;

export const HLine = styled.div`
  width: 100%;
  height: 2px;
  background: #fff;
  width: ${(props) => props.width ? props.width : '100%'};
`

export const PortFolioText = styled.p`
  font-size: 5rem;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 0.5px #fff;
  text-align: center;
  background: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: background 0.5s ease-in;

  :hover {
    background: linear-gradient(to right, #ff00ff, #00ffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0;
  }
`;