import  { useEffect } from "react";
import MobileLayout from "../components/common/MobileLayout";
import { styled } from "styled-components";

import { useParams } from "react-router";
import axios from "axios";
import React, { useState } from "react";


import mainLogo from "../assets/images/mainLogo.png";
import MainBtn from "../components/common/MainBtn";
import Modal from "../components/modal/Modal";

import { IMG_DATA } from "../assets/images";

function Campfire() {
  const { roomId } = useParams();

  const [letterCount, setLetterCount] = useState();
  const getMessageCount = async () => {
    try {
      const res = await axios.get(`https://api.tomatos.p-e.kr/api/rooms?roomName=${roomId}`);
      setLetterCount(res.data.data.messageNum);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMessageCount();
  });

  console.log(letterCount);

  const [isModal, setModal] = useState(false);
  const num = 10;

  return (
    <MobileLayout>
      <Header>
        <span>{letterCount}</span>/10
      </Header>
      <Title>
        담배 메이트 초대해서
        <br />
        불을 더 활활 지펴보자고
      </Title>

      <ImgWrapper>
        <img src={IMG_DATA[num - 1]} alt="걍 png" />
      </ImgWrapper>

      <MainBtn
        onClick={() => {
          setModal(true);
        }}
      >
        맞담할 사람 구함{" "}
      </MainBtn>

      {isModal ? <Modal setModal={setModal} /> : ``}
    </MobileLayout>
  );
}

export default Campfire;

const Header = styled.header`
  margin-top: 2.5rem;

  font-family: "SangSangShinb7";
  font-style: normal;
  font-size: 3rem;
  line-height: 2.6rem;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.16em;

  color: #4d4d49;

  & > span {
    font-family: "SangSangShinb7";
    font-style: normal;
    font-weight: 900;
    font-size: 3rem;
    line-height: 2.6rem;
    /* identical to box height */
    text-align: center;
    letter-spacing: 0.16em;

    color: #4d4d49;
  }
`;

const Title = styled.h1`
  margin-top: 3rem;

  font-family: "SangSangShinb7";
  font-style: normal;
  font-size: 4.5rem;
  font-weight: 500;
  line-height: 3.6rem;
  /* or 129% */
  text-align: center;

  /* black */
  color: #4d4d49;
`;

const ImgWrapper = styled.section`
  margin: 2.8rem 0rem;

  & > img {
    width: 26rem;
    height: 26rem;
  }
`;
