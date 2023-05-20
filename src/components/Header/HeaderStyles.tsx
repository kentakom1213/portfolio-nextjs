import styled from "styled-components";
import { pc, sp, tab } from "../../styles/Global/media";

export const HeaderContaner = styled.header`
  width: 100%;
  padding: 10px 50px;
  ${pc`
    height: 120px;
    margin: 0 auto 40px;
  `}
  ${tab`
    margin: 0 auto 30px;
  `}
  ${sp`
    margin: 0 auto 20px;
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
  :hover {
    transform: rotate(360deg);
    transition: 1.5s;
  }
  ${sp`
    width: 50px;
    margin: 20px 4px;
  `}
`;

export const HeaderTitle = styled.h1`
  margin: auto;
  font-size: 35px;
  ${tab`
    font-size: 30px;
    line-height: 90px;
  `}
  ${sp`
    font-size: 23px;
    line-height: 80px;
  `}
`;

export const HeaderSubTitle = styled.span`
  font-size: 28px;
  ${tab`
    font-size: 25px;
  `}
  ${sp`
    font-size: 12px;
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
    overflow-x: auto;
  `}
`;

export const HeaderLink = styled.a<{ underline: boolean }>`
  margin: auto;
  padding: 0 10px;
  font-size: 28px;
  text-decoration: ${(props) => props.underline ? 'underline' : 'none'};
  :hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
  ${tab`
    font-size: 25px;
    line-height: 65px;
  `}
  ${sp`
    font-size: 20px;
    line-height: 50px;
  `}
`;
