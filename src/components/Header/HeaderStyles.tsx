import styled from "styled-components";

export const HeaderContaner = styled.header`
  width: 100%;
  height: 140px;
  padding: 10px 120px;
`;

export const HeaderTitleFlex = styled.div`
  float: left;
  height: 100px;
  display: flex;
`;

export const HeaderIconBox = styled.div`
  padding: 20px 10px;
`;

export const HeaderTitle = styled.h1`
  font-size: 35px;
  line-height: 100px;
`;

export const HeaderLinkFlex = styled.div`
  float: right;
  height: 100px;
  display: flex;
`;

export const HeaderLink = styled.a<{ underline: boolean }>`
  font-size: 30px;
  line-height: 100px;
  padding: 0 10px;
  text-decoration: ${ (props) => props.underline ? 'underline' : 'none' };
`;
