import styled  from "styled-components";

export const Container = styled.div<{ width: number }>`
  margin: 0 auto 50px;
  width: 90%;
  max-width: ${props => props.width ? props.width : 1000}px;
`;
