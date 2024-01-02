import styled, { css } from "styled-components";

// height -> 희망마진 높이
export const Margin = styled.div`
  margin-bottom: ${props => props.height}px;
`;

export const Button = styled.button`
  width: 308px;
  height: 54px;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.color};
  color: #fff;
  text-align: center;
  font-size: 20px;
  margin-top: 32px;
  font-weight: 400;
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Label = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 42px;
  margin-bottom: 16px;
`;
export const InputBox = styled.input`
  width: 308px;
  height: 54px;
  border-radius: 10px;
  border: 1px solid #000;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 8px;
  padding: 12px;

  ${(props) =>
    props.addMargin &&
    css`
      margin-bottom: 18px; /* 여기에 원하는 크기를 넣어주세요 */
    `}
`;
export const ErrorText = styled.div`
  font-size: 12px;
  color: red;
  margin: 0 0 12px 6px;
`;