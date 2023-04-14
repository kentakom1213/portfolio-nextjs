import styled from "styled-components";
import { pc, sp, tab } from "../../styles/Global/media";

export const HeaderContaner = styled.header`
  width: 100%;
  margin: 0 auto 40px;
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
  ${tab`
    height: 90px;
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
  ${tab`
    font-size: 30px;
    line-height: 90px;
  `}
  ${sp`
    font-size: 25px;
    line-height: 80px;
  `}
`;

export const HeaderSubTitle = styled.span`
  font-size: 30px;
  ${tab`
    font-size: 25px;
  `}
  ${sp`
    font-size: 15px;
  `}
`;

export const HeaderLinkFlex = styled.div`
  height: 100px;
  display: flex;
  ${pc`
    float: right;
  `}
  ${tab`
    height: 65px;
  `}
  ${sp`
    height: 50px;
  `}
`;

export const HeaderLink = styled.a<{ underline: boolean }>`
  font-size: 30px;
  line-height: 100px;
  padding: 0 10px;
  text-decoration: ${(props) => props.underline ? 'underline' : 'none'};
  ${tab`
    font-size: 25px;
    line-height: 65px;
  `}
  ${sp`
    font-size: 20px;
    line-height: 50px;
  `}
`;
