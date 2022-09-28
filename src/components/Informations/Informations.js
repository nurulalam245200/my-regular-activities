import React from "react";
import Calculation from "../Calculation/Calculation";
import Info from "../Info/Info";
import "./Informations.css";

const Informations = () => {
  return (
    <div className="informations-container">
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
