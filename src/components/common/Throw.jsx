import React from "react";
import { styled } from "styled-components";
import fire from "../../assets/images/fire.png";
import smoked from "../../assets/images/smoked.png";
import MainBtn from "../common/MainBtn";

function Throw() {
  return (
    <ThrowWrapper>
      <Title>다 핌?</Title>
      <FireWrapper>
        <img src={fire} alt="불" />
      </FireWrapper>
      <StyledImg>
        <img src={smoked} alt="불" />
      </StyledImg>
      <MainBtn>ㅇㅇ</MainBtn>
    </ThrowWrapper>
  );
}
export default Throw;

const ThrowWrapper = styled.div`
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
  margin-bottom: 9.6rem;
`;

const StyledImg = styled.div`
  margin-bottom: 2.2rem;

  img {
    width: 3.2rem;
    height: 12.6rem;
  }
`;
