import React from "react";
import { fire } from "../../assets/images/fire.png";

function Smoke() {
  return (
    <>
      <Fire src={fire} alt="불" />
      <Tobacco />
    </>
  );
}

export default Smoke;

const Fire = styled.img``;

const Tobacco = styled.img``;
