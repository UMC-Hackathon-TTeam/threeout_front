import { useState } from "react";
import styled from "styled-components";
import { Button, Wrapper, InputBox } from "../../styles/Common";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const [info, setInfo] = useState({});
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setInfo(data);
    console.log(data);
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          name="email"
          placeholder="이메일을 입력해주세요"
          {...register("email")}
          margintop="32px"
        />
        <InputBox
          name="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          {...register("password")}
        />

        <Button type="submit" color="#71CACC">
          로그인
        </Button>
        <Button onClick={goToSign} color="#848484">
          회원가입
        </Button>
      </Form>
    </Wrapper>
  );
}

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 80px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
