import React from "react";
import { Outlet } from "react-router";

function SendLetter() {
  return (
    <div>
      SendLetter
      <Outlet />
    </div>
  );
}

export default SendLetter;
