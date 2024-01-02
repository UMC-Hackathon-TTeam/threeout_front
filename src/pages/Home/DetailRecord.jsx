import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Wrapper } from "./../../styles/Common";
import { emotionState, nameState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import impressed from "../../assets/image/impressed.png";
import happy from "../../assets/image/happy.png";
import sad from "../../assets/image/sad.png";
import warning from "../../assets/image/warning.png";
import { AiOutlineLeft } from "react-icons/ai";
import axios from "axios";
import Footer from "../../components/Footer";

export default function DetailRecord() {
  const [emotion] = useRecoilState(emotionState);
  const [name] = useRecoilState(nameState);
  const navigate = useNavigate();
  const { friendId } = useParams();
  const parsedFriendId = Number(friendId);
  const token = localStorage.getItem("token");
  const [records, setRecords] = useState([]);

  const getStickerIdByEmotion = (emotion) => {
    switch (emotion) {
      case "impressed":
        return 1; // impressed에 해당하는 stickerId
      case "happy":
        return 2; // happy에 해당하는 stickerId
      case "sad":
        return 3; // sad에 해당하는 stickerId
      case "warning":
        return 4; // warning에 해당하는 stickerId
      default:
        return 1; // 기본값으로 impressed stickerId를 사용
    }
  };

  const stickerId = getStickerIdByEmotion(emotion);

  useEffect(() => {
    axios
      .get(
        `http://43.201.170.138:8080/3out/record?friendId=${parsedFriendId}&stickerId=${stickerId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setRecords(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [parsedFriendId, stickerId, token]);

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
          {name}님은 조디_ISFJ님에게 <br />"
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
        {records.map((record, index) => (
          <div key={index}>
            <Date>{record.created_at}</Date>
            <Content>{record.description}</Content>
          </div>
        ))}
        <Footer />
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
