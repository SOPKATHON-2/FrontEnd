import React from "react";
import { styled } from "styled-components";

function MobileLayout({ children }) {
  return <MobileLayoutWrapper>{children}</MobileLayoutWrapper>;
}

export default MobileLayout;

const MobileLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 32rem;
  height: 100vh;
`;
