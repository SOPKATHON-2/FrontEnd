import React from "react";
import { styled } from "styled-components";

function MobileLayout() {
  return <MobileLayoutWrapper>MobileLayout</MobileLayoutWrapper>;
}

export default MobileLayout;

const MobileLayoutWrapper = styled.div`
  width: 32rem;
  height: 100vh;
  border: 2px solid black;
`;
