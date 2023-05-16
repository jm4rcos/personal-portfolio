import styled from 'styled-components';

export const Text = styled.p`
  font-size: 1em;
  font-family: "Fira Code", monospace;
  color: #80b16e;
  font-weight: 300;

  margin-bottom: ${( props ) => props.mb ? props.mb + 'em;' : ''}
`;