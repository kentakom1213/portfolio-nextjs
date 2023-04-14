import styled from "styled-components";
import { pc, sp } from "../../styles/Global/media";

export const HeaderContaner = styled.header`
  width: 100%;
  padding: 10px 50px;
  ${pc`
  height: 120px;
  `}
`;

export const HeaderTitleFlex = styled.div`
  height: 100px;
  display: flex;
  ${pc`
  float: left;
  `}
`;
 
export const HeaderIconBox = styled.div`
  padding: 20px 10px;
`;

export const HeaderTitle = styled.h1`
  font-size: 35px;
  line-height: 100px;
`;

export const HeaderLinkFlex = styled.div`
  height: 100px;
  display: flex;
  ${pc`
  float: right;
  `}
`;

export const HeaderLink = styled.a<{ underline: boolean }>`
  font-size: 30px;
  line-height: 100px;
  padding: 0 10px;
  text-decoration: ${(props) => props.underline ? 'underline' : 'none'};
`;
