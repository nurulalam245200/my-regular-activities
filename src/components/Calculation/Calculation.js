import React from "react";

const Calculation = () => {
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-2xl font-medium text-center mb-3">Break Time</h1>
        <div className="flex gap-1 mt-5 mb-5 justify-center items-center">
          <button className="btn btn-outline btn-info">10</button>
          <button className="btn btn-outline btn-success">20</button>
          <button className="btn btn-outline btn-warning">30</button>
          <button className="btn btn-outline btn-error">40</button>
          <button className="btn btn-outline btn-primary">50</button>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-medium text-center mb-3">
          Exeresise Time details
        </h1>
        <div>
          <h2 className="text-xl font-medium text-center">
            Practice Time :
            <span className="text-base text-slate-400">{}minutes</span>
          </h2>
        </div>
        <div>
          <h2 className="text-xl font-medium text-center">
            Break Time :
            <span className="text-base text-slate-400">{}minutes</span>
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
