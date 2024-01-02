import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 308px;
  height: 54px;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.color};
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  margin-top: ${(props) => props.margintop || "22px"};
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
  padding: 12px;
  margin-top: ${(props) => props.margintop || "8px"};
`;
export const ErrorText = styled.div`
  font-size: 12px;
  color: red;
  margin: 0 0 12px 6px;
`;
