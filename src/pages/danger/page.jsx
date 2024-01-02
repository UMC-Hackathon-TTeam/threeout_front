import React from "react";
import FriendProfile from "../../components/FriendProfile";

const DUMMY_FREINDSLIST = [
  {
    profile_img:
      "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
    nickname: "토미",
    relation: "엄마",
  },
  {
    profile_img:
      "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
    nickname: "토미",
    relation: "아빠",
  },
  {
    profile_img:
      "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
    nickname: "토미",
    relation: "누나",
  },
  {
    profile_img:
      "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
    nickname: "토미",
    relation: "형",
  },
  {
    profile_img:
      "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
    nickname: "토미",
    relation: "할머니",
  },
];

const DangerPage = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='bg-gradient-to-r from-main-color to-sub-color-2 w-[400px] h-52 my-12 relative'>
          <img // 경고이미지
            className='absolute object-cover w-40 h-40 right-5 bottom-2'
            src={require("../../assets/image/warning.png")}
            alt=''
          />
          <div className='absolute flex flex-col gap-3 px-2 left-2 top-2'>
            <label className='px-2 py-1 text-2xl font-bold text-center bg-white border rounded-lg'>
              손절 위원회
            </label>
            <p className='w-[200px] text-white '>
              친구관계, 고민된다면 여기서 정리해 보세요
            </p>
          </div>
        </div>
      </div>
      <div className='px-2 my-10'>
        <p className='font-semibold text-gray-300 text-start'>친구 목록</p>
        <div className='my-5' />
        {DUMMY_FREINDSLIST.map((data, index) => (
          <>
            <FriendProfile
              key={index}
              img={data.profile_img}
              nickname={data.nickname}
              relation={data.relation}
            />
            <div className='mb-5' />
          </>
        ))}
      </div>
    </>
  );
};

export default DangerPage;
