import styled  from "styled-components";

export const Container = styled.div<{ width: number }>`
  width: 90%;
  max-width: ${props => props.width ? props.width : 1000}px};
  margin: 0 auto;
`;
