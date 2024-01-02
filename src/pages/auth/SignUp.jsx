import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { emailState, passwordState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import {
  Button,
  Wrapper,
  Label,
  InputBox,
  ErrorText,
} from "../../styles/Common";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .email("이메일 형식이 아닙니다."),
  password: yup
    .string()
    .required("영문, 숫자포함 8자리를 입력해주세요.")
    .min(8, "최소 8자 이상 가능합니다")
    .max(15, "최대 15자 까지만 가능합니다")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
      "영문 숫자포함 8자리를 입력해주세요."
    ),
  passwordConfirm: yup
    .string()
    .required("비밀번호 확인을 해주세요.")
    .oneOf([yup.ref("password")], "비밀번호가 다릅니다."),
});

export default function SignUp() {
  const [, setInfo] = useState({});
  const [, setEmail] = useRecoilState(emailState);
  const [, setPassword] = useRecoilState(passwordState);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema), // Use yup resolver for validation
  });

  const onSubmit = (data) => {
    setInfo(data);
    console.log(data);
    setEmail(data.email);
    setPassword(data.password);
    navigate("/auth/setProfile");
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Label first>아이디</Label>
      <InputBox
        name="email"
        placeholder="이메일을 입력해주세요"
        {...register("email")}
      />
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

      <Label>비밀번호</Label>
      <InputBox
        name="password"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        {...register("password")}
      />
      {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

      <Label>비밀번호 재확인</Label>
      <InputBox
        name="passwordConfirm"
        placeholder="확인을 위해 비밀번호를 입력해주세요"
        type="password"
        {...register("passwordConfirm")}
      />
      {errors.passwordConfirm && (
        <ErrorText>{errors.passwordConfirm.message}</ErrorText>
      )}

      <Button color="#848484" marginTop="100px" type="submit">
        다음 단계로 이동
      </Button>
    </Wrapper>
  );
}
