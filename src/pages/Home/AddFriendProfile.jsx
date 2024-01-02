import React, { useState } from "react";
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

export default function AddFriendProfile() {
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
      promise: "",
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
    console.log(data); // 수정된 부분: 직접 받아온 데이터 출력
    navigate("/");
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <ImageUpload onFileUrlChange={handleFileUrlChange} value={profile_img} />
      <InputBox
        name="friendNickname"
        placeholder="친구의 별명을 알려주세요"
        {...register("friendNickname", { required: "필수입력사항입니다" })}
        margintop="64px"
      />
      {errors.friendNickname && (
        <ErrorText>{errors.friendNickname.message}</ErrorText>
      )}

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
    </Wrapper>
  );
}
