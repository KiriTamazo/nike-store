import React from "react";

const FlexContent = ({ id, reverse, endpoint }) => {
  const { title, heading, subtitle, text, img, url, btn } = endpoint;
  return (
    <section
      id={id}
      className={`flex lg:gap-12 gap-8 items-center justify-between lg:flex-col lg:justify-center mt-20 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center">
        <h1 className="text-4xl mb-4 sm:text-3xl font-bold text-gradient">
          {heading}
        </h1>
        <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg">
          {title}
        </h1>
        <p className="xl:text-sm my-4 text-slate-900">{text}</p>
        <a href="javascript:void(0)" className="flex items-center">
          <button className="bg-slate-900 button-theme text-slate-100 py-1.5">
            {btn}
          </button>
        </a>
      </div>
      <div className="flex justify-center items-center max-w-xl relative lg:m-w-none w-full">
        <img
          src={img}
          alt={`img/${heading}`}
          className={`w-auto object-fill transitions-theme ${
            reverse
              ? "h-60 lg:h-56 md:h-36 sm:h-36 xsm:h-36 rotate-6 hover:-rotate-12"
              : "h-72 lh:h-64 md:h-48 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12"
          }`}
        />
      </div>
    </section>
  );
};

export default FlexContent;
