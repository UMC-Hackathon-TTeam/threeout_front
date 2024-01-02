import React, { useState, useEffect } from "react";
import FriendProfile from "../../components/FriendProfile";
import { Button } from "../../styles/Common";
import axios from "axios";
import styled from "styled-components";
import noList from "../../assets/image/noList.png";
import { useNavigate } from "react-router-dom";
import { nameState } from "../../recoil/atom";
import { useRecoilState } from "recoil";

const HomePage = () => {
  const [myProfile, setMyProfile] = useState({});
  const [friendsList, setFriendsList] = useState([]);
  const [name, setName] = useRecoilState(nameState);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://43.201.170.138:8080/3out/profile", {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
        },
      })
      .then((response) => {
        console.log(response.data.result);
        setMyProfile(response.data.result);
        setName(response.data.result.nickname);
      });

    axios
      .get("http://43.201.170.138:8080/3out/home", {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
        },
      })
      .then(function (response) {
        console.log(response);
        setFriendsList(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const moveToAdd = () => {
    navigate("/main/addFriendProfile");
  };

  return (
    <div className="text-center">
      <div className="flex items-center w-full gap-2">
        <img
          className="w-[64px] h-[64px] rounded-full object-fit"
          src={myProfile.image}
          alt="bueno-img"
        />
        <div className="flex flex-col gap-2 text-start">
          <p className="text-lg font-bold">{myProfile.nickname}</p>
          <p className="px-2 py-1 border border-black rounded-md">
            {myProfile.promise}
          </p>
        </div>
      </div>
      <Button color="rgba(113, 202, 204, 1)" onClick={moveToAdd}>
        친구 추가
      </Button>
      <div className="px-2 my-10">
        <p className="font-semibold text-gray-300 text-start">친구 목록</p>
        <div className="my-5" />
        {friendsList.length === 0 ? (
          <NoWrapper>
            <Image />
            <Text>친구들을 등록하고 인간관계를 관리해보세요</Text>
          </NoWrapper>
        ) : (
          friendsList.map((data, index) => (
            <div key={index}>
              <FriendProfile
                id={data.id}
                img={data.image}
                nickname={data.nickname}
                relation={data.relation}
              />
              <div className="mb-5" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default HomePage;

const NoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.div`
  background-image: url(${noList});
  background-position: center;
  background-size: cover;
  width: 233.717px;
  height: 145px;
  margin-top: 30px;
`;
const Text = styled.div`
  color: #848484;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  margin: 20px;
`;
