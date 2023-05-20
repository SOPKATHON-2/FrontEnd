import React from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router";
import fire from "../../assets/images/fire.png";
import letter from "../../assets/images/letter.png";
import MainBtn from "../common/MainBtn";
import axios from "axios";

function Write() {
  const { roomId } = useParams();
  const navigator = useNavigate();

  const postLetter = async () => {
    try {
      const res = await axios.post("https://api.tomatos.p-e.kr/api/message", {
        roomName: roomId,
        content: "test통신",
      });
      navigator(`/${roomId}/smoke`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <WriteWrapper>
      <Title>고민을 말해봐</Title>
      <Subtitle>아니, 그래서 뭔데?</Subtitle>
      <FireWrapper>
        <img src={fire} alt="불" />
      </FireWrapper>
      <LetterWrapper>
        <img src={letter} alt="편지지" />
        <textarea
          rows="5"
          cols="33"
          placeholder="종이에 너를 우울하게 하는 고민을 적어서 담배를 말아보자!"
        />
      </LetterWrapper>
      <MainBtn onClick={postLetter}>담배 말기</MainBtn>
    </WriteWrapper>
  );
}

export default Write;
const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.span`
  margin-top: 6rem;

  text-align: center;

  font-family: "SangSangShinb7";
  font-weight: 400;
  font-size: 3.8rem;
  line-height: 3.6rem;
`;

const Subtitle = styled.span`
  margin-bottom: 1.4rem;

  text-align: center;

  font-family: "SangSangShinb7";
  font-weight: 400;
  font-size: 3.8rem;
  line-height: 3.6rem;
`;
const FireWrapper = styled.div`
  img {
    width: 8rem;
    height: 8rem;
  }
  margin-bottom: 2.3rem;
`;

const LetterWrapper = styled.div`
  position: relative;
  img {
    width: 26rem;
    height: 20rem;
  }
  textarea {
    position: absolute;
    top: 1.3rem;
    left: 1.6rem;
    width: 22.8rem;
    height: 16.8rem;
    line-height: 2.8rem;

    font-family: "SangSangShinb7";
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 2.8rem;
    color: #4d4d49;

    background-color: transparent;
    border: none;
  }
  textarea::placeholder {
    color: #969696;
  }
`;
