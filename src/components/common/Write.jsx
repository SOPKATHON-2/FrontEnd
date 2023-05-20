import React from "react";
import { styled } from "styled-components";
import fire from "../../assets/images/fire.png";
import letter from "../../assets/images/letter.png";

function Write() {
  return (
    <>
      <Title>고민을 말해봐</Title>
      <FireWrapper>
        <img src={fire} alt="불" />
      </FireWrapper>
      <LetterWrapper>
        <img src={letter} alt="편지지" />
        <Letter
          type="textarea"
          placeholder="종이에 너를 우울하게 하는 고민을 적어서 담배를 말아보자!"
        />
      </LetterWrapper>
    </>
  );
}

export default Write;

const Title = styled.h1``;

const FireWrapper = styled.div``;

const LetterWrapper = styled.div``;

const Letter = styled.input``;
