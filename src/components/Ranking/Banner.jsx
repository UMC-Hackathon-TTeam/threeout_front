import React from 'react'

const Banner = ({
  emotion
}) => {
  return (
    <div className="bg-gradient-to-r from-main-color to-sub-color-2 w-[400px] h-40 my-12 relative">

      {emotion === "감동" && <img  // 감동이미지
        className='absolute left-0 object-cover w-24 h-24 bottom-4'
        src={require('../../assets/image/impressed.png')}
        alt=''
      /> }
      {emotion === "신남" && <img  // 신남이미지
        className='absolute left-0 object-cover w-24 h-24 bottom-4'
        src={require('../../assets/image/happy.png')}
        alt=''
      /> }
      {emotion === "경고" && <img  // 경고이미지
        className='absolute left-0 object-cover w-24 h-24 bottom-4'
        src={require('../../assets/image/warning.png')}
        alt=''
      /> }
      {emotion === "서운함" && <img  // 서운함이미지
        className='absolute left-0 object-cover w-24 h-24 bottom-4'
        src={require('../../assets/image/sad.png')}
        alt=''
      /> }
      {
        (emotion === "감동" || emotion === "신남") && (
          <img
            className='absolute object-cover w-8 h-8 left-16 bottom-4'
            src={require('../../assets/image/impressedEffect.png')}
            alt=''
          />
        )
      }

      {emotion === "감동" && <img   // 감동이미지
        className='absolute left-0 object-cover w-24 h-24 top-6'
        src={require('../../assets/image/impressed.png')}
        alt=''
      /> }
      <img  // 트로피 이미지
        className='absolute bottom-0 object-cover w-20 h-20 right-8'
        src={require('../../assets/image/impressed3.png')}
        alt=''
      />
      <span className='absolute text-lg font-bold top-2 right-8'>
        <p>"{emotion}" 스티커를 가장 많이</p>
        <p className='text-end'>받은 친구 랭킹</p>
      </span>
    </div>
  )
}

export default Banner