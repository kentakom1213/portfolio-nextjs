import styled from "styled-components";
import { pc, sp } from "../../styles/Global/media";

export const HeaderContaner = styled.header`
  width: 100%;
  padding: 10px 50px;
  ${pc`
  height: 120px;
  `}
  ${sp`
  padding: 10px 20px;
  `}
`;

export const HeaderTitleFlex = styled.div`
  height: 100px;
  display: flex;
  ${pc`
  float: left;
  `}
  ${sp`
  height: 80px;
  `}
`;
 
export const HeaderIconBox = styled.div`
  position: relative;
  width: 80px;
  margin: 20px 10px;
  ${sp`
  width: 60px;
  margin: 20px 5px;
  `}
`;

export const HeaderTitle = styled.h1`
  font-size: 35px;
  line-height: 100px;
  ${sp`
  font-size: 25px;
  line-height: 80px;
  `}
`;

export const HeaderSubTitle = styled.span`
  font-size: 30px;
  ${sp`
  font-size: 20px;
  `}
`;

export const HeaderLinkFlex = styled.div`
  height: 100px;
  display: flex;
  ${pc`
  float: right;
  `}
  ${sp`
  height: 60px;
  `}
`;

export const HeaderLink = styled.a<{ underline: boolean }>`
  font-size: 30px;
  line-height: 100px;
  padding: 0 10px;
  text-decoration: ${(props) => props.underline ? 'underline' : 'none'};
  ${sp`
  font-size: 20px;
  line-height: 60px;
  `}
`;
