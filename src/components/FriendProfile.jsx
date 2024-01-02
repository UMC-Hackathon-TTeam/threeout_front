import React from "react";
import { useNavigate } from "react-router-dom";

const FriendProfile = ({ id, img, nickname, relation }) => {
  const navigate = useNavigate();

  const onClickFriend = () => {
    navigate(`/main/friendProfile/${id}`);
  };

  return (
    <div className="flex items-center w-full gap-2" onClick={onClickFriend}>
      <img
        className="w-16 h-16 rounded-full object-fit"
        src={img}
        alt="bueno-img"
      />
      <p className="font-bold">{nickname}</p>
      <p className="w-32 px-2 py-1 ml-20 bg-gray-200 border rounded-[20px]">
        {relation}
      </p>
    </div>
  );
};

export default FriendProfile;
