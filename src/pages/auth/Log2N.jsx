import axios from 'axios';
import React, { useState } from 'react'
import Input from '../../components/Input';
import Button from '../../components/Button';

const Log2N = () => {
  const [enteredId, setEnteredId] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const submitHandler = async (e) => {
      e.preventDefault();
      setLoading(true);
      if (enteredId === '' || enteredPassword === '') {
          alert('Please enter form rules');
          return;
      }
      
      try {
          const response = await axios.post('/3out/signin', {
              "email": enteredId,
              "password": enteredPassword
          });
          
          
          console.log(response.data);
          
      } catch (error) {
          console.error('에러 발생:', error);
      }
  
  }
  return (
      <div className="flex flex-col items-center gap-10 mx-20 mt-20">
          <h1 className="w-full text-4xl font-bold text-start"><p className='whitespace-pre-line'>이메일과 비밀번호를</p>입력해주세요</h1>
          <form className='flex flex-col w-full gap-10'>
              <Input
                  type="text"
                  placeholder="6글자 이상, 글자(a-z), 숫자(0-9), 마침표만 입력"
                  value={enteredId}
                  onChange={(e) => setEnteredId(e.target.value)}
                  label="이메일 주소"
              />
              <Input 
                  type="password"
                  placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                  value={enteredPassword}
                  onChange={(e) => setEnteredPassword(e.target.value)}
                  label="비밀번호"
              />
              {loading && <p className='font-semibold text-center text-slate-500'>Loading...</p>}
              <Button onClick={submitHandler} label="확인" disabled={loading}/>
          </form>
      </div>
  )
}

export default Log2N