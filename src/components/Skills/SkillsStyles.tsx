import { pc, tab, sp } from "@/styles/Global/media";
import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  row-gap: 20px;
  ${pc`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
  `}
  ${tab`
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
  `}
  ${sp`
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
  `}
`;

export const SkillsContainerTitle = styled.h2`
  margin: 15px 0 10px 0;
  padding: 0 30px;
  ${pc`
    margin: 20px 0 15px 0;
    font-size: 30px;
  `}
`;

export const SkillBox = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #000;
  text-align: center;
  ${pc`
    padding: 20px;
  `}
`;

export const SkillImageBox = styled.div`
`;

export const SkillBoxTitle = styled.h3`
  margin: 10px 0;
  ${pc`
    font-size: 22px;
  `}
  ${tab`
    font-size: 20px;
  `}
  ${sp`
    margin: 5px 0;
    font-size: 18px;
  `}
`;

export const SkillText = styled.p`
`;
