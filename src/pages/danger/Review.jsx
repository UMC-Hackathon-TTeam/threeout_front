import React from "react";
import styled from "styled-components";
import { Button, Wrapper } from "../../styles/Common";
import Footer from "../../components/Footer";

const Review = () => {
  return (
    <>
      <Wrapper>
        <div className='flex flex-col gap-[1px] mb-16'>
          <div className='flex items-center'>
            <HeadName>박승태</HeadName>
            <p className='text-lg'>는 나에게 어떤 친구일까요?</p>
          </div>
          <p className='text-lg'>친구와 함께 한 추억을 떠올려 보세요</p>
        </div>

        <Date>친구가 있어 좋은 점</Date>
        <Content>
          25살이 되고 우울한 날 3시간동안 말동무가 되주었다. 들어주기만 해도
          위로가 되었다.
        </Content>
        <Date>이 친구가 없다면...?</Date>
        <Content>
          허전하지만 가끔씩 선을 넘는 친구 대학 졸업 후에는 굳이 만나고 싶지
          않다.
        </Content>
        <Button color='#71CACC'>고민 해결 완료</Button>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Review;

const HeadName = styled.p`
  color: #71cacc;
  font-size: 25px;
  font-weight: 700;
`;

const Date = styled.div`
  color: #71cacc;
  font-size: 15px;
  font-weight: 500;
  margin: 10px 0;
`;
const Content = styled.div`
  width: 326px;
  padding: 20px;
  border-radius: 10px;
  background: #eee;
`;
