import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./../../styles/Common";
import { emotionState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import impressed from "../../assets/image/impressed.png";
import happy from "../../assets/image/happy.png";
import sad from "../../assets/image/sad.png";
import warning from "../../assets/image/warning.png";
import { AiOutlineLeft } from "react-icons/ai";

export default function DetailRecord() {
  const [emotion] = useRecoilState(emotionState);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 뒤로 가기
  };

  return (
    <>
      <Wrapper>
        <Back onClick={goBack}>
          <AiOutlineLeft size={21} />
          뒤로가기
        </Back>
        {emotion === "impressed" ? (
          <EmotionImg image={impressed} />
        ) : emotion === "happy" ? (
          <EmotionImg image={happy} />
        ) : emotion === "sad" ? (
          <EmotionImg image={sad} />
        ) : emotion === "warning" ? (
          <EmotionImg image={warning} />
        ) : null}
        <Text>
          박승태님은 조디_ISFJ님에게 <br />"
          {emotion === "impressed"
            ? "감동"
            : emotion === "happy"
            ? "행복"
            : emotion === "sad"
            ? "슬픔"
            : emotion === "warning"
            ? "경고"
            : null}
          " 을 전달했어요
        </Text>
        <Date>2024.01.02</Date>
        <Content>
          25살이 되고 우울한 날 3시간동안 말동무가 되주었다. 들어주기만 해도
          위로가 되었다.
        </Content>
      </Wrapper>
    </>
  );
}

const Back = styled.div`
  position: absolute;
  top: 70px;
  left: 20px;
  cursor: pointer;
  color: #848484;
  font-size: 15px;
  font-weight: 350;
  display: flex;
  align-items: center;
`;
const EmotionImg = ({ image }) => (
  <div
    style={{
      width: "160px",
      height: "160px",
      objectFit: "cover",
      backgroundImage: `url(${image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      margin: "0 auto",
    }}
  />
);

const Text = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  margin: 40px 0;
`;

const Date = styled.div`
  color: #71cacc;
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0;
`;
const Content = styled.div`
  width: 326px;
  padding: 20px;
  border-radius: 10px;
  background: #eee;
`;
