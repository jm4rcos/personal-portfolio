import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 1360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  width: 100%;
  `;

export const Content = styled.div`
  @media (max-width: 1360px) {
    flex-direction: column;
    align-items: center;
  }
  margin-top: 2rem;
  width: 100%;
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;


  .project-description {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;

    p {
      font-size: 1rem;
      font-weight: 300;
      color: #fff;
    }
  }

  .project-image {
    width: 50%;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .project-info{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    bottom: 0;
    left: 0;
  }
`;

export const Name = styled.p`
  font-size: 2em;
  color: #fff;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
`;