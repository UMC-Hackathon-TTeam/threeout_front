import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./../../styles/Common";
import { emotionState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import impressed from "../../assets/image/impressed.png";
import happy from "../../assets/image/happy.png";
import sad from "../../assets/image/sad.png";
import warning from "../../assets/image/warning.png";
import axios from "axios";
import Footer from "../../components/Footer";

export default function RecordText() {
  const navigate = useNavigate();
  const { friendId } = useParams();
  const parsedFriendId = Number(friendId);
  const [emotion, setEmotion] = useRecoilState(emotionState);
  const token = localStorage.getItem("token");
  const [emotionDetail, setEmotionDetail] = useState(""); // 추가된 부분

  const onClickSubmit = () => {
    let stickerId;

    switch (emotion) {
      case "impressed":
        stickerId = 1;
        break;
      case "happy":
        stickerId = 2;
        break;
      case "sad":
        stickerId = 3;
        break;
      case "warning":
        stickerId = 4;
        break;
      default:
        stickerId = 0; // 기본값 설정 (필요에 따라 다르게 설정)
    }

    axios
      .post(
        `http://43.201.170.138:8080/3out/home/${parsedFriendId}/records`,
        { sticker_id: stickerId, description: emotionDetail },
        {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setEmotion(null);
        navigate("/main");
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate(`/main/friendProfile/${parsedFriendId}`);
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
      <EmotionDetail
        value={emotionDetail}
        onChange={(e) => setEmotionDetail(e.target.value)}
      />
      <Button color="#71CACC" onClick={onClickSubmit}>
        완료
      </Button>
      <Footer />
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
