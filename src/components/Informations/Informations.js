import React from "react";
import Calculation from "../Calculation/Calculation";
import Info from "../Info/Info";

const Informations = () => {
  return (
    <div>
      <div>
        <div>
          <Info></Info>
        </div>
        <div>
          <Calculation></Calculation>
        </div>
      </div>
    </div>
  );
};

export default Informations;
