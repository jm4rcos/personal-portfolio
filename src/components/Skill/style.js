import styled from "styled-components";

export const Bracket = styled.div`
  font-size: 1em;
  font-family: "Fira Code", monospace;
  color: #2c96e4;
  font-weight: 300;
  text-align: left;
  margin-bottom: ${(props) => (props.mb ? props.mb + "em" : "0.75em")};
`;

export const Text = styled.span`
  font-size: 1em;
  font-family: "Fira Code", monospace;
  color: #FFF;
  font-weight: 300;
`;

export const Desc = styled.span`
  font-size: 1em;
  font-family: "Fira Code", monospace;
  color: #80b16e;
  font-weight: 300;
`;

export const Sub = styled.span`
  font-size: 1em;
  font-family: "Fira Code", monospace;
  color: #2c96e4;
  font-weight: 300;
`;
