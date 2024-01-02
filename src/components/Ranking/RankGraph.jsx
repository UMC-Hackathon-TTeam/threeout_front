import React from "react";

const RankGraph = () => {
  return (
    <div className='flex items-end gap-2'>
      <div className='w-20 h-10 bg-main-color rounded-md relative'>
        <img
          className='w-12 h-12 object-fit rounded-full absolute -top-8 left-4'
          src='https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg'
          alt=''
        />
      </div>
      <div className='w-20 h-32 bg-sub-color-1 rounded-md relative'>
        <img
          className='w-12 h-12 object-fit rounded-full absolute -top-8 left-4'
          src='https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg'
          alt=''
        />
      </div>
      <div className='w-20 h-16 bg-sub-color-2 rounded-md relative'>
        <img
          className='w-12 h-12 object-fit rounded-full absolute -top-8 left-4'
          src='https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default RankGraph;
