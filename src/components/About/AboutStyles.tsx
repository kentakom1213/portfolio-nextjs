import styled from "styled-components";

export const AboutContentsFrame = styled.div`
  height: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const AboutImageFrame = styled.div`
  position: relative;
  padding: 5%;
`;

export const AboutTextFrame = styled.div`
  padding: 5% 80px;
`;

export const AboutHeadLine = styled.h1<{ fontSize: number }>`
  font-size: ${props => props.fontSize}px;
  padding: 20px 0;
`;

export const AboutHeadLineTag = styled.h2`
  width: 200px;
  font-size: 25px;
  opacity: 0.5;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`;