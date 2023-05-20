import React from "react";
import { fire } from "../../assets/images/fire.png";
import { letter } from "../../assets/images/letter.png";

function Write() {
  return (
    <>
      <Title>고민을 말해봐</Title>
      <Fire src={fire} alt="불" />
      <LetterWrapper>
        <LetterPaper src={letter} alt="편지지" />
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

const Fire = styled.img``;

const LetterWrapper = styled.div``;
const LetterPaper = styled.img``;

const Letter = styled.input``;
