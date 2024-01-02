import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "./../../styles/Common";
import { emotionState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import impressed from "../../assets/image/impressed.png";
import happy from "../../assets/image/happy.png";
import sad from "../../assets/image/sad.png";
import warning from "../../assets/image/warning.png";

export default function RecordSticker() {
  const navigate = useNavigate();
  const [selectedEmotion, setSelectedEmotion] = useRecoilState(emotionState);

  const moveToText = () => {
    navigate("/main/friendProfile/text/1");
  };

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    console.log(emotion);
  };

  return (
    <Wrapper>
      <Title>
        박승태와 함께한 하루는 어땠나요?
        <br />
        오늘 친구에게 느낀 감정을 골라보세요
      </Title>
      <Container>
        <ButtonWrapper
          onClick={() => handleEmotionClick("impressed")}
          isSelected={selectedEmotion === "impressed"}
        >
          <EmotionImg image={impressed} />
          <EmotionTxt>감동</EmotionTxt>
        </ButtonWrapper>
        <ButtonWrapper
          onClick={() => handleEmotionClick("happy")}
          isSelected={selectedEmotion === "happy"}
        >
          <EmotionImg image={happy} />
          <EmotionTxt>신남</EmotionTxt>
        </ButtonWrapper>
        <ButtonWrapper
          onClick={() => handleEmotionClick("warning")}
          isSelected={selectedEmotion === "warning"}
        >
          <EmotionImg image={warning} />
          <EmotionTxt>경고</EmotionTxt>
        </ButtonWrapper>
        <ButtonWrapper
          onClick={() => handleEmotionClick("sad")}
          isSelected={selectedEmotion === "sad"}
        >
          <EmotionImg image={sad} />
          <EmotionTxt>서운함</EmotionTxt>
        </ButtonWrapper>
      </Container>
      <Button color="#71CACC" onClick={moveToText}>
        다음
      </Button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 50px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background: ${({ isSelected }) => (isSelected ? "#b2e9eb" : "#eee")};
`;
const EmotionImg = ({ image }) => (
  <div
    style={{
      width: "86px",
      height: "86px",
      objectFit: "cover",
      backgroundImage: `url(${image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  />
);
const EmotionTxt = styled.div`
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
`;
