import React, { useState } from "react";
import styled from "styled-components";
import { Button, Wrapper, InputBox } from "../../styles/Common";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("http://43.201.170.138:8080/3out/signin", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        const token = response.data.result.accessToken;
        localStorage.setItem("token", token);
        navigate("/main");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const goToSign = () => {
    navigate("/auth/signUp");
  };

  return (
    <Wrapper>
      <Title>
        반가워요!
        <br />
        우리 같이 시작해볼까요?
      </Title>
      <InputBox
        name='email'
        placeholder='이메일을 입력해주세요'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margintop='32px'
      />
      <InputBox
        name='password'
        placeholder='비밀번호를 입력해주세요'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        color='#71CACC'
        onClick={handleSubmit}
      >
        로그인
      </Button>
      <Button
        onClick={goToSign}
        color='#848484'
      >
        회원가입
      </Button>
    </Wrapper>
  );
}

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 80px;
`;
