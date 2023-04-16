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
  margin: 40px auto;
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
  ${pc`
    width: 700px;
  `}
`;

export const ContactSuccessed = styled.div`
  text-align: center;
`;

export const ContactFormLabelFrame = styled.div`
  margin: 20px 0 10px;
`;

export const ContactFormLabel = styled.label`
  ${pc`
    font-size: 20px;
  `}
  ${tab`
    font-size: 18px;
  `}
  ${sp`
    font-size: 16px;
  `}
`;

export const ContactFormInput = styled.input`
  width: 300px;
  max-width: 100%;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  :hover {
  }
  :focus {
    outline: none;
  }
  ${pc`
    font-size: 20px;
  `}
  ${tab`
    font-size: 18px;
  `}
  ${sp`
    font-size: 18px;
  `}
`;

export const ContactFormTextarea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  resize: vertical;
  :focus {
    outline: none;
  }
  ${pc`
    height: 200px;
    font-size: 20px;
  `}
  ${tab`
    height: 150px;
    font-size: 18px;
  `}
  ${sp`
    height: 80px;
    font-size: 18px;
  `}
`;

export const ContactButtonFrame = styled.div`
  margin: 20px 0 0;
  text-align: right;
`;

export const ContactFormButton = styled.button`
  height: 40px;
  width: 80px;
  border-radius: 10px;
  border: 2px solid #000;
  background-color: white;
  font-size: 20px;
  font-weight: bold;
  line-height: 10px;
  color: black;
  :hover {
    background-color: #000;
    color: white;
  }
`;
