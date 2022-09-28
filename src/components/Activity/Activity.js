import React from "react";
import "./Activity.css";

const Activity = (props) => {
  const { name, category, spendTime, img, title } = props.activity;
  return (
    <div>
      <div className="card card-compact w-80 h-full bg-base-100 shadow-xl">
        <figure>
          <img className="card-image" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{title}</p>
          <div className="flex m-auto w-80 font-medium">
            <p>Time Schedule: {spendTime}</p>
            <p>Subject :{category}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
