import React from "react";
import { styled } from "styled-components";
import fire from "../../assets/images/fire.png";

function Throw() {
  return (
    <>
      <img src={fire} alt="불" />
      <Tobacco />
    </>
  );
}

export default Throw;

const Tobacco = styled.img``;
