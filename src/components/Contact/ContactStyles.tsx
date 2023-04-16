import styled from 'styled-components';
import { pc, sp, tab } from "../../styles/Global/media";

export const ContactFrame = styled.div`
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  ${pc`
    margin: 50px 0;
    height: 100px;
  `}
  ${tab`
    margin: 40px 0;
    height: 80px;
  `}
  ${sp`
    margin: 30px 0;
    height: 70px;
  `}
`;

export const ContactIconBox = styled.div`
  position: relative;
  ${pc`
    width: 80px;
    margin: 0 30px;
  `}
  ${tab`
    width: 60px;
    margin: 0 20px;
  `}
  ${sp`
    width: 50px;
    margin: 0 10px;
  `}
`;

export const ContactFormFrame = styled.div`
  margin: 0 auto;
  text-align: left;
  ${pc`
    width: 700px;
  `}
`;

export const ContactSuccessed = styled.div`
  text-align: center;
`;

export const ContactFormLabel = styled.label`
  font-size: 20px;
`;

export const ContactFormInput = styled.input`
  font-size: 20px;
`;

export const ContactFormTextarea = styled.textarea`
  width: 100%;
  font-size: 20px;
`;

export const ContactFormButton = styled.button`
  border-radius: 10px;
  border: 2px solid #000;
  background-color: white;
  :hover {
    background-color: #000;
    color: white;
  }
  ${pc`
    height: 40px;
    width: 80px;
    font-size: 20px;
    font-weight: bold;
    line-height: 10px;
  `}
`;