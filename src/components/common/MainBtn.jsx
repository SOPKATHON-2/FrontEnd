import React from "react";
import { styled } from "styled-components";
import MainBtnImg from "../../assets/images/main_button.png";

function MainBtn({children , ...props}) {
  return (
    <BtnWrapper {...props}>
      <img src={MainBtnImg} />
      <div>{children}</div>
    </BtnWrapper>
  );
}

export default MainBtn;

const BtnWrapper = styled.div`
  position: relative;

  width: 26rem;
  height: 5rem;

  margin: 0 auto;
  margin-top: 2rem;

  cursor: pointer;

  img {
    width: 26rem;
    height: 5rem;
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);

    font-family: "SangSangShinb7";
    font-size: 3.6rem;
    font-weight: 600;
  }
`;
