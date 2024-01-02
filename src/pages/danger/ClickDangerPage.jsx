import warning from "../../assets/image/warning.png";
import sad from "../../assets/image/sad.png";

import React from "react";
import { Button, Margin } from "../../styles/Common";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DangerBar from "./DangerBar";
import Footer from "../../components/Footer";

const DUMMY_DANGER = {
  id: 4,
  nickname: "이대호",
  relation: "조선의 4번 타자",
  ratio: 86,
  sticker3: 2,
  sticker4: 4,
};

const ClickDangerPage = () => {
  const navigate = useNavigate();

  const { id, nickname, relation, ratio, sticker3, sticker4 } = DUMMY_DANGER;

  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImg alt='' />
        <Name>{nickname}</Name>
        <Detail>{relation}</Detail>
      </ProfileWrapper>
      <Container>
        <Title>손절 위기 관계</Title>
        <Margin height={20} />
        <DangerBar value={ratio} />
        <ListWrapper>
          <ListItem>
            <EmotionImg image={warning} />
            <EmotionTxt>{sticker3}개</EmotionTxt>
          </ListItem>
          <ListItem>
            <EmotionImg image={sad} />
            <EmotionTxt>{sticker4}개</EmotionTxt>
          </ListItem>
        </ListWrapper>
        <Button
          color='#71CACC'
          onClick={() => navigate(`/danger/${id}/review`)}
        >
          고민해 보기
        </Button>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default ClickDangerPage;

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
