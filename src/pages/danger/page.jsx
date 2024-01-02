import React from 'react'
import DangerBar from '../../components/DangerBar'
import { useNavigate } from 'react-router-dom'

const DUMMY_FREINDSLIST = [
  {
    "userId": 1,
    "profile_img": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
    "nickname": "토미",
    "danger": 32,
  },
  {
    "userId": 3,
    "profile_img": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
    "nickname": "토미",
    "danger": 90,
  },
  {
    "userId": 2,
    "profile_img": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
    "nickname": "토미",
    "danger": 20,
  },
  {
    "userId": 7,
    "profile_img": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
    "nickname": "토미",
    "danger": 50,
  },
  {
    "userId": 10,
    "profile_img": "https://mybueno2023.s3.ap-northeast-2.amazonaws.com/upload/IMG_5864.jpg",
    "nickname": "토미",
    "danger": 10,
  }
]



const DangerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex flex-col items-center'>
        <div className="bg-gradient-to-r from-main-color to-sub-color-2 w-[400px] h-52 my-12 relative">
          <img  // 경고이미지
            className='absolute object-cover w-40 h-40 right-5 bottom-2'
            src={require('../../assets/image/warning.png')}
            alt=''
          />
          <div className='absolute flex flex-col gap-3 px-2 left-2 top-2'>
            <label className='px-2 py-1 text-2xl font-bold text-center bg-white border rounded-lg'>손절 위원회</label>
            <p className='w-[200px] text-white '>친구관계, 고민된다면 여기서 정리해 보세요</p>
          </div>
        </div>
      </div>
      <div className='px-10 my-10'>
        <p className='font-semibold text-black text-start'>블랙 리스트</p>
        <div className='my-5' />
          {DUMMY_FREINDSLIST.map((data, index) => (
            <>
              <div className='flex items-center justify-between w-full gap-2'>
                <div 
                  className='flex items-center gap-2 text-lg cursor-pointer hover:opacity-30'
                  onClick={() => navigate(`/Danger/${data.userId}`)}
                >
                  <img className="w-16 h-16 rounded-full object-fit" src={data.profile_img} alt="bueno-img"  />
                  <p className='font-bold'>{data.nickname}</p>
                </div>
                <DangerBar value={data.danger}/>
              </div>
              <div className='mb-5'/>
            </>
          ))}
      </div>

    </>

  )
}

export default DangerPage