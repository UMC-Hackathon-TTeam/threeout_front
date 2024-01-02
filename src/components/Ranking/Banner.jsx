import React from 'react'

const Banner = ({
  emotion
}) => {
  return (
    <div className="bg-gradient-to-r from-main-color to-sub-color-2 w-[400px] h-40 my-12 relative">

      {emotion === "감동" && <img  // 감동이미지
        className='w-24 h-24 object-cover absolute left-0 bottom-4'
        src={require('../../assets/images/impressed.png')}
        alt=''
      /> }
      {emotion === "신남" && <img  // 신남이미지
        className='w-24 h-24 object-cover absolute left-0 bottom-4'
        src={require('../../assets/images/excited.png')}
        alt=''
      /> }
      {emotion === "경고" && <img  // 경고이미지
        className='w-24 h-24 object-cover absolute left-0 bottom-4'
        src={require('../../assets/images/warning.png')}
        alt=''
      /> }
      {emotion === "서운함" && <img  // 서운함이미지
        className='w-24 h-24 object-cover absolute left-0 bottom-4'
        src={require('../../assets/images/sad.png')}
        alt=''
      /> }
      {
        (emotion === "감동" || emotion === "신남") && (
          <img
            className='w-8 h-8 object-cover absolute left-16 bottom-4'
            src={require('../../assets/images/impressedEffect.png')}
            alt=''
          />
        )
      }

      {emotion === "감동" && <img   // 감동이미지
        className='w-24 h-24 object-cover absolute left-0 top-6'
        src={require('../../assets/images/impressed.png')}
        alt=''
      /> }
      <img  // 트로피 이미지
        className='w-20 h-20 object-cover absolute right-8 bottom-0'
        src={require('../../assets/images/impressed3.png')}
        alt=''
      />
      <span className='font-bold absolute top-2 right-8 text-lg'>
        <p>"{emotion}" 스티커를 가장 많이</p>
        <p className='text-end'>받은 친구 랭킹</p>
      </span>
    </div>
  )
}

export default Banner