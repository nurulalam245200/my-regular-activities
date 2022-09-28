import React, { useState, useEffect } from "react";
import "./Activities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Calculation from "../Calculation/Calculation";
import Activity from "../Activity/Activity";
const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const handleAddToList = (activity) => {
    const newExerciseTime = [...time, activity];
    setTime(newExerciseTime);
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
          <Calculation></Calculation>
        </div>
      </div>
    </div>
  );
};

export default Activities;
