import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  margin-top: 8.5em;

  @media (max-width: 920px) {
    & > * {
      align-items: center;
    }
  }

  & .span-desc {
    font-size: 1em;
    font-family: "Fira Code", monospace;
    color: #80b16e;
    font-weight: 300;
    margin-top: 1em;
  }

  & .content {
    width: 100%;
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    &.left-side,
    .right-side {
      width: 50%;
    }
    @media (max-width: 920px) {
      .left-side,
      .right-side {
        width: 100%;
      }
    }

    & .skills-container {
      margin-bottom: 2em;
    }
  }

  @media (max-width: 920px) {
    & .content {
      flex-direction: column;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
`;

export const Name = styled.p`
  font-size: 2em;
  color: #fff;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
`;

export const Title = styled.p`
  font-size: 1em;
  font-family: "Fira Code", monospace;
  color: #c456d8;
  font-weight: 300;
  margin-bottom: ${(props) => props.mb ? props.mb + "em" : "0.7em" };
`;

export const StyledSkill = styled.p`
  font-size: 1em;
  font-family: "Fira Code", monospace;
  color: #c456d8;
  font-weight: 300;
`;
