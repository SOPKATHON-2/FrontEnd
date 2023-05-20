import React from "react";
import { useParams } from "react-router-dom";
import Write from "../components/common/Write";
import Smoke from "../components/common/Smoke";
import Throw from "../components/common/Throw";

function Actiongif() {
  const { action } = useParams();

  return (
    <>
      {
        {
          write: <Write />,
          smoke: <Smoke />,
          throw: <Throw />,
        }[action]
      }
    </>
  );
}

export default Actiongif;
