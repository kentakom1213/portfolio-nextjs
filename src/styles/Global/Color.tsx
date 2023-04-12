import styled from "styled-components";

export const SpanColor = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;