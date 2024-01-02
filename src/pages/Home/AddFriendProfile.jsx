import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  Button,
  Wrapper,
  Label,
  InputBox,
  ErrorText,
} from "../../styles/Common";
import ImageUpload from "../../components/ImageUpload";
import axios from "axios";

export default function AddFriendProfile() {
  const token = localStorage.getItem("token");
  const [state, setState] = useState({});
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      profile_img: "",
      nickname: "",
      relation: "",
    },
  });

  const profile_img = watch("profile_img");

  const setCustomValue = (id, value) => {
    setValue(id, value);
  };

  const handleFileUrlChange = (url) => {
    const modifiedUrl = url.split(".jpg")[0] + ".jpg";
    setCustomValue("profile_img", modifiedUrl);
  };

  const onSubmit = (data) => {
    setState(data);
    console.log(data);

    axios
      .post(
        "http://43.201.170.138:8080/3out/home/add",
        {
          nickname: data.nickname,
          relation: data.relation,
          image: data.profile_img,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
          },
        }
      )
      .then(function (response) {
        console.log(response);
        navigate("/main");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <ImageUpload onFileUrlChange={handleFileUrlChange} value={profile_img} />
      <InputBox
        name="nickname"
        placeholder="친구의 별명을 알려주세요"
        {...register("nickname", { required: "필수입력사항입니다" })}
        margintop="64px"
      />
      {errors.nickname && <ErrorText>{errors.nickname.message}</ErrorText>}

      <InputBox
        name="relation"
        placeholder="친구와 나의 관계/상태를 적어주세요"
        {...register("relation", { required: "필수입력사항입니다." })}
        margintop="32px"
      />
      {errors.relation && <ErrorText>{errors.relation.message}</ErrorText>}

      <Button color="#71CACC" type="submit" marginTop="64px">
        확인
      </Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
