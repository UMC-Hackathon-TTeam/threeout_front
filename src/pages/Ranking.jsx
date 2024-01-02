import React from 'react'
import RankGraph from '../components/Ranking/RankGraph'
import RankCard from '../components/Ranking/RankCard'
import Banner from '../components/Ranking/Banner';

const DUMMY_MYPROFILE = {
  "profile_img": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
  "nickname": "토미",
  "relation": "아는 형님의 아는 누님"
};


const Ranking = () => {
  return (
    <div className='flex items-center flex-col'>
      <Banner emotion="신남"/>
      <RankGraph />
      <div className='mb-5' />
      <RankCard 
        img={DUMMY_MYPROFILE.profile_img}
        nickname={DUMMY_MYPROFILE.nickname}
        relation={DUMMY_MYPROFILE.relation}
      />
      <div className='mb-5' />
      <RankCard 
        img={DUMMY_MYPROFILE.profile_img}
        nickname={DUMMY_MYPROFILE.nickname}
        relation={DUMMY_MYPROFILE.relation}
      />
      <div className='mb-5' />
      <RankCard 
        img={DUMMY_MYPROFILE.profile_img}
        nickname={DUMMY_MYPROFILE.nickname}
        relation={DUMMY_MYPROFILE.relation}
      />
    </div>
  )
}

export default Ranking