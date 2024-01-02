import React, { useState, useEffect } from "react";
import RankGraph from "../components/Ranking/RankGraph";
import RankCard from "../components/Ranking/RankCard";
import Banner from "../components/Ranking/Banner";
import axios from "axios";
import styled from "styled-components";
import Footer from "../components/Footer";

const Ranking = () => {
  const [rankingList, setRankingList] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://43.201.170.138:8080/3out/home/rankings", {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
        },
      })
      .then(function (response) {
        console.log(response);
        setRankingList(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // 로딩이 완료되면 loading 상태를 false로 설정
      });
  }, [token]);

  return (
    <div className='flex items-center flex-col'>
      {loading ? (
        <p>Loading...</p>
      ) : !Array.isArray(rankingList) || rankingList.length === 0 ? (
        <Text>
          친구 랭킹이 <br />
          존재하지 않습니다.
        </Text>
      ) : (
        rankingList.map((friend, index) => (
          <div key={index}>
            <Banner emotion='신남' />
            <RankGraph />
            <div className='mb-5' />
            <RankCard
              img={friend.profile_img}
              nickname={friend.nickname}
              relation={friend.relation}
            />
            <div className='mb-5' />
          </div>
        ))
      )}
      <Footer />
    </div>
  );
};

export default Ranking;

const Text = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: 600;
`;
