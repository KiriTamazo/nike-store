import React from "react";

const Title = ({ title }) => {
  return (
    <div className="grid items-center">
      <h1 className="text-5xl mb-6 md:mb-3 lg:text-4xl md:text-3xl text-slate-900 font-bold filter drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
};

export default Title;
