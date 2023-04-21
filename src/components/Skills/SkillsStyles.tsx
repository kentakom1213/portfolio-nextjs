import { pc } from "@/styles/Global/media";
import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  ${pc`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
  `}
`;

export const SkillBox = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #000;
  text-align: center;
`;

export const SkillImageBox = styled.div`
`;

export const SkillTitle = styled.h3`
  margin: 5px 0;
  ${pc`
    font-size: 22px;
  `}
`;

export const SkillText = styled.p`
`;
