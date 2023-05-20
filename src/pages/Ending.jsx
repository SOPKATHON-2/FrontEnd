import React from "react";
import MobileLayout from "../components/common/MobileLayout";
import ending from "../assets/images/ending.png";
import MainBtn from "../components/common/MainBtn";
import { useNavigate, useParams } from "react-router";

function Ending() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/home`);
  };
  return (
    <MobileLayout>
      <img src={ending} />
      <MainBtn onClick={handleNavigate}>담타 한번 더 ㄱ?</MainBtn>
    </MobileLayout>
  );
}

export default Ending;
