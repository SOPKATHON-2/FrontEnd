import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import fire from "../../assets/images/fire.png";
import smoking from "../../assets/images/smoking.gif";
import MainBtn from "../common/MainBtn";

function Smoke() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/9/throw`);
  };
  return (
    <SmokeWrapper>
      <Title>같이 피실?</Title>
      <FireWrapper>
        <img src={fire} alt="불" />
      </FireWrapper>
      <StyledImg>
        <img src={smoking} alt="불" />
      </StyledImg>
      <MainBtn onClick={handleNavigate}>ㄱㄱ</MainBtn>
    </SmokeWrapper>
  );
}
export default Smoke;

const SmokeWrapper = styled.div`
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

const StyledImg = styled.div`
  margin-bottom: 2.2rem;

  img {
    width: 3.2rem;
    height: 20rem;
  }
`;
