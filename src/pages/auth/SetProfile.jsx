import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  Wrapper,
  Label,
  InputBox,
  ErrorText,
} from "../../styles/Common";
import ImageUpload from "../../components/ImageUpload";

export default function SetProfile() {
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
      <Label>나의 별명</Label>
      <InputBox
        name="nickname"
        placeholder="친구들이 부르는 내 별명을 알려주세요!"
        {...register("nickname", { required: "닉네임을 입력해주세요" })}
      />
      {errors.nickname && <ErrorText>{errors.nickname.message}</ErrorText>}

      <Label>나의 다짐</Label>
      <InputBox
        name="promise"
        placeholder="나는 어떤 친구가 되고 싶나요?"
        {...register("promise", { required: "다짐을 입력해주세요" })}
      />
      {errors.promise && <ErrorText>{errors.promise.message}</ErrorText>}

      <Button color="#71CACC" type="submit">
        확인
      </Button>
    </Wrapper>
  );
}