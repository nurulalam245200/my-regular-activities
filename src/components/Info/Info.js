import React from "react";
import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
const Info = () => {
  return (
    <div>
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
    </div>
  );
};

export default Info;
