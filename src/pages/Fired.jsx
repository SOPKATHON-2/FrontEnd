import React, { useEffect } from "react";
import { styled } from "styled-components";
import MobileLayout from "../components/common/MobileLayout";
import Bomb from "../assets/images/bomb.png";
import { useNavigate } from "react-router";

function Fired() {
  const navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigator(`/ending`);
    }, 1500);
  });

  return (
    <MobileLayout>
      <img width="320px" src={Bomb} alt="bomb" />
    </MobileLayout>
  );
}

export default Fired;
