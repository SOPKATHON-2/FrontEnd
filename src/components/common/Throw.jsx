import React from "react";
import { fire } from "../../assets/images/fire.png";

function Throw() {
  return (
    <>
      <Fire src={fire} alt="불" />
      <Tobacco />
    </>
  );
}

export default Throw;

const Fire = styled.img``;

const Tobacco = styled.img``;
