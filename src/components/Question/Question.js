import React from "react";

const Question = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        <div className="bg-slate-400 w-80 h-full m-auto">
          <h2 className="text-xl font-semibold">How Does React Works?</h2>
          <p>
            React is a declarative, efficient, and flexible JavaScript library
            for building (UI) user interfaces.It works virtual dom with id real
            dom manipulation by JSX if you want to change anything in child
            component react only check the value with previous one and it can
            update only changing component. JSX like HTML code but it provide
            dynamical data by bable compiler.
          </p>
        </div>
        <div className="bg-slate-400 w-80 h-full m-auto">
          <h2 className="text-xl font-semibold">Props Vs State</h2>
          <p>
            <strong>Props :</strong>: props provide couple of data which can use
            different component. It allows passing data from one component to
            other components. <br /> It is similar to function arguments and can
            be passed to the component the same way as arguments passed in a
            function. Props are immutable so we cannot modify the props from
            inside the component. <br />
            <strong>State :</strong> it only provide state value which allows to
            change intime state in value. A state must be kept as simple as
            possible. <br /> It represents the component's local state or
            information. It can only be accessed or modified inside the
            component or by the component directly.
          </p>
        </div>
        <div className="bg-slate-400 w-80 h-full m-auto">
          <h2 className="text-xl font-semibold">UseEffect uses</h2>
          <p>
            <strong>Uses of UseEffect :</strong>: UseEffect is a Hook and it
            provide side effect in your components fetching data , directly
            updating the DOM, setInterval,setTimeOut etc
            <br /> the useEffect provide two aguements one is function another
            is dependency.it interaction with another functionality.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
