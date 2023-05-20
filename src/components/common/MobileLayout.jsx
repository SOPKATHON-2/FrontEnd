import React from "react";
import { styled } from "styled-components";
import MakeRoom from "./MakeRoom";

function MobileLayout({ children }) {
  return (
    <MobileLayoutWrapper>
      <MakeRoom />
      {children}
    </MobileLayoutWrapper>
  );
}

export default MobileLayout;

const MobileLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 32rem;
  height: 100vh;
`;
