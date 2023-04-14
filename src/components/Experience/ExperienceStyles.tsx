import styled from "styled-components";
import { pc, sp, tab } from "../../styles/Global/media";

export const ExperienceFrame = styled.div`
  margin: 40px 0;
  padding: 30px;
  position: relative;
  border: 3px solid #000;
  border-radius: 20px;
  font-size: 20px;
  ${sp`
    margin: 30px 0;
    padding: 20px;
    border: 2px solid #000;
    border-radius: 15px;
    font-size: 15px;
  `}
`;

export const ExperienceTitle = styled.h1`
  position: absolute;
  top: -25px;
  margin-left: 10px;
  padding: 0 10px;
  font-size: 30px;
  background-color: #fff;
  ${sp`
    font-size: 20px;
    top: -15px;
  `}
`;