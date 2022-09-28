import React, { useState, useEffect } from "react";
import "./Activities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Informations from "../Informations/Informations";
import Activity from "../Activity/Activity";
const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const handleAddToList = (activity) => {
    console.log(activity);
  };
  return (
    <div>
      <div className="main-container">
        <div className="activities-container">
          <div className="activities-title">
            <FontAwesomeIcon className="icon" icon={faHeart} />
            <h1 className="text-3xl font-bold ">My Regular Activity</h1>
          </div>
          <div className="activity-container mt-8">
            {activities.map((activity) => (
              <Activity
                key={activity.id}
                activity={activity}
                handleAddToList={handleAddToList}
              ></Activity>
            ))}
          </div>
        </div>
        <div className="calculation-container">
          <Informations handleAddToList={handleAddToList}></Informations>
        </div>
      </div>
    </div>
  );
};

export default Activities;
