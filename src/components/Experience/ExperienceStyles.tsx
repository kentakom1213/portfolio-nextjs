import styled from "styled-components";
import { pc, sp, tab } from "../../styles/Global/media";

export const ExperienceFrame = styled.div`
  margin: 40px 0;
  padding: 30px;
  position: relative;
  border: 3px solid #000;
  border-radius: 20px;
  ${sp`
    margin: 30px 0;
    padding: 20px;
    border: 2px solid #000;
    border-radius: 15px;
  `}
`;

export const ExperienceTitle = styled.h1`
  position: absolute;
  margin-left: 10px;
  padding: 0 10px;
  background-color: #fff;
  ${pc`
    font-size: 30px;
    top: -25px;
  `}
  ${tab`
    font-size: 25px;
    top: -20px;
  `}
  ${sp`
    font-size: 20px;
    top: -15px;
  `}
`;

export const ExperienceSubTitle = styled.h2<{ hasLink: string | undefined }>`
  text-align: center;
  text-decoration: ${props => props.hasLink ? "underline" : "none"};
  ${pc`
    margin: 10px auto 20px;
    font-size: 25px;
  `}
  ${tab`
    margin: 20px auto;
    font-size: 20px;
  `}
  ${sp`
    font-size: 18px;
    margin-bottom: 10px;
  `}
`;

export const ExperienceText = styled.p`
  ${pc`
    font-size: 20px;
  `}
  ${tab`
    font-size: 18px;
  `}
  ${sp`
    font-size: 15px;
  `}
`;

export const ExperienceGrid = styled.div<{ ratio?: [number, number] }>`
  display: grid;
  position: relative;
  ${({ ratio }) => pc`
    grid-template-columns: ${ratio ? `${ratio[0]}fr ${ratio[1]}fr` : "1fr 1fr"};
  `}
  ${({ ratio }) => tab`
    grid-template-columns: ${ratio ? `${ratio[0]}fr ${ratio[1]}fr` : "1fr 1fr"};
  `}
`;

export const ExperienceGridImage = styled.div`
  position: relative;
  margin: 20px 10px;
  ${pc`
    height: 350px;
  `}
  ${tab`
    height: 300px;
  `}
  ${sp`
    height: 200px;
  `}
`;

export const ExperienceGridText = styled.div`
  margin: auto 15px;
  ${sp`
    padding: 20px 0 0;
  `}
`;

export const ExperienceZemiGrid = styled.div`
  display: grid;
  ${pc`
    margin: 40px 0 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 330px 300px 330px;
  `}
  ${tab`
    margin: 30px 0 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 330px 300px 330px;
  `}
`;

export const ExperienceOptimizeImage = styled.div`
  position: relative;
  ${pc`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    margin: 5px;
  `}
  ${tab`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    margin: 5px;
  `}
  ${sp`
    height: 400px;
  `}
`;

export const ExperienceOptimizeText = styled.div`
  ${pc`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    &:before {
      content: "→";
      font-size: 50px;
      float: right;
      position: relative;
      left: -80px;
      top: -10px
    }
  `}
  ${tab`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    &:before {
      content: "→";
      font-size: 40px;
      float: right;
      position: relative;
      left: -50px;
      top: 5px;
    }
  `}
  ${sp`
    margin: 10px 0;
  `}
`;

export const ExperienceKeisanryoImage = styled.div`
  position: relative;
  ${pc`
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    margin: 5px;
  `}
  ${tab`
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    margin: 5px;
  `}
  ${sp`
    height: 400px;
  `}
`;

export const ExperienceKeisanryoText = styled.div`
  ${pc`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    margin: auto 5px;
    &:before {
      content: "←";
      font-size: 50px;
      float: right;
      position: relative;
      left: -350px;
      top: -10px;
    }
  `}
  ${tab`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    margin: auto 5px;
    &:before {
      content: "←";
      font-size: 40px;
      float: right;
      position: relative;
      left: -270px;
      top: 5px;
    }
  `}
  ${sp`
    margin: 0 10px;
  `}
`;
