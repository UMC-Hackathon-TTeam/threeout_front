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

export default function RecordText() {
  const navigate = useNavigate();
  const [emotion, setEmotion] = useRecoilState(emotionState);

  const onClickSubmit = () => {
    setEmotion(null);
    navigate("/main/friendProfile/1");
  };

  return (
    <Wrapper>
      {emotion === "impressed" ? (
        <EmotionImg image={impressed} />
      ) : emotion === "happy" ? (
        <EmotionImg image={happy} />
      ) : emotion === "sad" ? (
        <EmotionImg image={sad} />
      ) : emotion === "warning" ? (
        <EmotionImg image={warning} />
      ) : null}
      <EmotionDetail />
      <Button color="#71CACC" onClick={onClickSubmit}>
        완료
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
const EmotionImg = ({ image }) => (
  <div
    style={{
      width: "160px",
      height: "160px",
      objectFit: "cover",
      backgroundImage: `url(${image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      marginBottom: "32px",
    }}
  />
);
const EmotionDetail = styled.textarea`
  width: 326px;
  height: 262px;
  border: none;
  border-radius: 10px;
  background: #eee;
  outline: none;
  resize: none;
  padding: 10px;
  margin: 20px;
  font-size: 16px;
`;
