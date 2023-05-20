import React from "react";
import MobileLayout from "../components/common/MobileLayout";
import { styled } from "styled-components";
import MainIcon from "../assets/images/main_icon.png";
import MainBtn from "../components/common/MainBtn";
import { useNavigate } from "react-router";


function Home() {

    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate(`/9/write`);
    };


  return (
    <MobileLayout>
      <ServiceNameWrapper>
        <ServiceTitle>담타 ㄱ?</ServiceTitle>
        <SubTitle>온라인 담타 공간</SubTitle>
      </ServiceNameWrapper>
      <MainImgWrapper>
        <img src={MainIcon} />
      </MainImgWrapper>
      <MainBtn onClick={handleNavigate}>ㅇ ㅋ</MainBtn>
    </MobileLayout>
  );
}

export default Home;

const ServiceNameWrapper = styled.header`
  margin: 5rem 7.95rem 4.5rem 7.95rem;
`;

const ServiceTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "SangSangShinb7";
  font-size: 5.8rem;
  font-weight: 500;
`;

const SubTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: "SangSangShinb7";
  font-size: 3.6rem;
  font-weight: 500;
`;

const MainImgWrapper = styled.section`
  display: flex;
  justify-content: center;
  img {
    width: 26rem;
  }
`;
