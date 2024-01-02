import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./../../styles/Common";
import { emotionState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import impressed from "../../assets/image/impressed.png";
import happy from "../../assets/image/happy.png";
import sad from "../../assets/image/sad.png";
import warning from "../../assets/image/warning.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function FriendProfile() {
  const navigate = useNavigate();
  const { friendId } = useParams();
  const parsedFriendId = Number(friendId);
  const [selectedEmotion, setSelectedEmotion] = useRecoilState(emotionState);
  const token = localStorage.getItem("token");
  const [friendProfile, setFriendProfile] = useState([]);

  useEffect(() => {
    axios
      .get(`http://43.201.170.138:8080/3out/home/${parsedFriendId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
        },
      })
      .then(function (response) {
        console.log(response);
        setFriendProfile(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [friendId, token]);

  const addRecord = () => {
    navigate(`/main/friendProfile/sticker/${parsedFriendId}`);
  };

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    console.log(emotion);
    navigate(`/main/friendProfile/detail/${parsedFriendId}`);
  };

  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImg alt="" src={friendProfile[0]?.image} />
        <Name>{friendProfile[0]?.nickname}</Name>
        <Detail>{friendProfile[0]?.relation}</Detail>
      </ProfileWrapper>
      <Container>
        <Title>친구와 나의 관계</Title>
        <ListWrapper>
          {friendProfile[0] && (
            <>
              <ListItem onClick={() => handleEmotionClick("impressed")}>
                <EmotionImg image={impressed} />
                <EmotionTxt>{friendProfile[1]?.감동}개</EmotionTxt>
              </ListItem>
              <ListItem onClick={() => handleEmotionClick("happy")}>
                <EmotionImg image={happy} />
                <EmotionTxt>{friendProfile[1]?.신남}개</EmotionTxt>
              </ListItem>
              <ListItem onClick={() => handleEmotionClick("warning")}>
                <EmotionImg image={warning} />
                <EmotionTxt>{friendProfile[1]?.경고}개</EmotionTxt>
              </ListItem>
              <ListItem onClick={() => handleEmotionClick("sad")}>
                <EmotionImg image={sad} />
                <EmotionTxt>{friendProfile[1]?.서운함}개</EmotionTxt>
              </ListItem>
            </>
          )}
        </ListWrapper>
        <Button color="#71CACC" onClick={addRecord}>
          기록추가하기
        </Button>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 18px;
`;

const ProfileImg = styled.img`
  object-fit: cover;
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background-color: #e3e3e3;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 28px;
`;

const Detail = styled.div`
  color: #666;
  font-weight: 500;
  margin-top: 12px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 4px rgba(101, 101, 101, 0.1);
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
`;
const Title = styled.div`
  font-size: 20px;
  text-align: center;
`;
const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
`;
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const EmotionImg = ({ image }) => (
  <div
    style={{
      width: "65px",
      height: "65px",
      objectFit: "cover",
      backgroundImage: `url(${image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  />
);
const EmotionTxt = styled.div`
  text-align: center;
  margin-top: 5px;
`;
