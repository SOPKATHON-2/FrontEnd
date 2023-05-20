import React from "react";
import { styled } from "styled-components";
import PlusRoom from "../../assets/images/plus_room.png";
import { useNavigate } from "react-router";

function MakeRoom() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/home`);
  };
  return (
    <ButtonWrapper onClick={handleNavigate}>
      <img src={PlusRoom} />
    </ButtonWrapper>
  );
}

export default MakeRoom;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;

  cursor: pointer;

  img {
    width: 4rem;
    height: 4rem;
  }
`;
