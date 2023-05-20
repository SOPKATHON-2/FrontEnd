import React from "react";
import { styled } from "styled-components";
import fire from "../../assets/images/fire.png";

function Smoke() {
  return (
    <>
      <img src={fire} alt="불" />
      <Tobacco />
    </>
  );
}

export default Smoke;
const Tobacco = styled.img``;
