import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FriendProfile = ({ id, img, nickname, relation }) => {
  const navigate = useNavigate();

  const onClickFriend = () => {
    navigate(`/main/friendProfile/${id}`);
  };

  return (
    <ListWrapper onClick={onClickFriend}>
      <img
        className="w-16 h-16 rounded-full object-fit"
        src={img}
        alt="bueno-img"
      />
      <Name>{nickname}</Name>
      <Text>{relation}</Text>
    </ListWrapper>
  );
};

export default FriendProfile;

const ListWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.div`
  width: 100px;
  font-weight: 700;
`;
const Text = styled.div`
  padding: 4px 12px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10.667px;
  background: #ececec;
`;
