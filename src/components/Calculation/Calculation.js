import React, { useState } from "react";
import "./Calculation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
const Calculation = ({ time }) => {
  const [rest, setRest] = useState(0);

  const minBreak = () => {
    setRest(10);
  };

  const midBreak = () => {
    setRest(20);
  };

  const maxBreak = () => {
    setRest(30);
  };

  const ultraMaxBreak = () => {
    setRest(40);
  };
  const SuperMaxBreak = () => {
    setRest(50);
  };
  let totalExereiseTime = 0;
  for (const exTime of time) {
    totalExereiseTime = totalExereiseTime + exTime.spendTime;
  }

  return (
    <div className="calculation-container">
      <div className="flex gap-4">
        <div>
          <img className="profile-image" src="man-4.png" alt="" />
        </div>
        <div className="flex flex-col gap-3 ms-2">
          <div>
            <h2 className="text-2xl font-semibold">Nurul Alam</h2>
          </div>
          <div className="flex flex-row">
            <FontAwesomeIcon className="icon" icon={faLocationArrow} />
            <p className="text-center">Feni,Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div>
          <div className="flex justify-center items-center bg-sky-300 p-3 rounded gap-5 mx-auto">
            <div>
              <h3 className="text-2xl font-medium">
                56 <span className="text-base text-slate-400">KG</span>
              </h3>
              <p className="text-lg font-medium">Weight</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium">
                5.4 <span className="text-base text-slate-400">ft</span>
              </h3>
              <p className="text-lg font-medium">Heigth</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium">
                24 <span className="text-base text-slate-400">yr</span>
              </h3>
              <p className="text-lg font-medium">Age</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-medium text-center mb-3">Break Time</h1>
        <div className="flex gap-1 mt-5 mb-5 justify-center items-center">
          <button
            onClick={() => minBreak()}
            className="btn btn-outline btn-info"
          >
            10
          </button>
          <button
            onClick={() => midBreak()}
            className="btn btn-outline btn-success"
          >
            20
          </button>
          <button
            onClick={() => maxBreak()}
            className="btn btn-outline btn-warning"
          >
            30
          </button>
          <button
            onClick={() => ultraMaxBreak()}
            className="btn btn-outline btn-error"
          >
            40
          </button>
          <button
            onClick={() => SuperMaxBreak()}
            className="btn btn-outline btn-primary"
          >
            50
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-medium text-center mb-3">
          Exeresise Time details
        </h1>
        <div>
          <h2 className="text-xl font-medium text-center">
            Practice Time :
            <span className="text-base text-slate-400">
              {totalExereiseTime} minutes
            </span>
          </h2>
        </div>
        <div>
          <h2 className="text-xl font-medium text-center">
            Break Time :
            <span className="text-base text-slate-400"> {rest} minutes</span>
          </h2>
        </div>
      </div>
      <div>
        <button>Add Activities</button>
      </div>
    </div>
  );
};

export default Calculation;
