import React from "react";
import "./Activities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Informations from "../Informations/Informations";
import Activity from "../Activity/Activity";
const Activities = () => {
  return (
    <div>
      <div className="main-container">
        <div className="activities-container">
          <div className="activities-title">
            <FontAwesomeIcon className="icon" icon={faHeart} />
            <h1 className="text-3xl font-bold text-emerald-500 ">
              My Regular Activity
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
            <Activity></Activity>
          </div>
        </div>
        <div className="calculation-container">
          <Informations></Informations>
        </div>
      </div>
    </div>
  );
};

export default Activities;
