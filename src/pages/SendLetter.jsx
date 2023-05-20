import React from "react";
import { Outlet } from "react-router";
import MobileLayout from '../components/common/MobileLayout';

function SendLetter() {
  return (
    <div>
      <MobileLayout>
        <Outlet />
      </MobileLayout>
    </div>
  );
}

export default SendLetter;
