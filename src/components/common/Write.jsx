import React from "react";
import { styled } from "styled-components";
import fire from "../../assets/images/fire.png";
import letter from "../../assets/images/letter.png";
import MainBtn from "../common/MainBtn";

function Write() {
  return (
    <WriteWrapper>
      <Title>고민을 말해봐</Title>
      <FireWrapper>
        <img src={fire} alt="불" />
      </FireWrapper>
      <LetterWrapper>
        <img src={letter} alt="편지지" />
        <textarea
          id="story"
          name="story"
          rows="5"
          cols="33"
          placeholder="종이에 너를 우울하게 하는 고민을 적어서 담배를 말아보자!"
        ></textarea>
      </LetterWrapper>
      <MainBtn>담배 말기</MainBtn>
    </WriteWrapper>
  );
}

export default Write;
const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 6rem;
  margin-bottom: 5rem;

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

    background-color: transparent;
    border: none;
  }
`;
