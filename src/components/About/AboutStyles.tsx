import styled from "styled-components";
import { pc, sp, tab } from "../../styles/Global/media";

export const AboutContentsFrame = styled.div`
  display: grid;
  ${pc`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const AboutImageFrame = styled.div`
  position: relative;
  padding: 5%;
  ${tab`
    height: 500px;
  `}
`;

export const AboutTextFrame = styled.div`
  padding: 5% 80px;
`;

export const AboutHeadLine = styled.h2<{ fontSize: number }>`
  font-size: ${props => props.fontSize}px;
  padding: 15px 0;
`;

export const AboutHeadLineTag = styled.div`
  width: 200px;
  font-size: 25px;
  opacity: 0.5;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`;