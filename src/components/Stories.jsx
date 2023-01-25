import React from "react";
import Title from "../mini-components/Title";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Stories = ({ id, story }) => {
  const { title, news } = story;
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,

    breakpoints: {
      1400: { perPage: 3 },
      991: { perPage: 2 },
      768: { perPage: 1 },
    },
  };
  return (
    <section id={id} className="nike-container mb-11">
      <Title title={title} />
      <div className="mt-7">
        <Splide options={splideOptions}>
          {news?.map((val, index) => (
            <SplideSlide key={index} className="mb-0.5">
              <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow-slate-200 ring-1 ring-slate-200">
                <div className="flex items-center">
                  <img
                    src={val.img}
                    alt={`img/store/${index}`}
                    className="w-full h-auto object-covershadow-md shadow-slate-200 rounded-tr-lg rounded-tl-lg"
                  />
                </div>
                <div className="flex items-center justify-between w-full px-4 gap-1">
                  <div className="flex items-center gap-0.5">
                    <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                    <span className="text-xs font-bold">{val.like}</span>
                  </div>
                  <div className="flex items-center gap-0.5 ">
                    <ClockIcon className="icon-style w-4 h-3 text-black" />
                    <span className="text-xs font-bold">{val.time}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <HashtagIcon className="icon-style  text-blue-600" />
                    <span className="text-xs font-bold text-blue-600">
                      {val.by}
                    </span>
                  </div>
                </div>

                <div className="grid items-center justify-items-start px-4">
                  <h1 className="text-base font-semibold lg:text-sm h-14 my-1 flex items-center">
                    {val.title}
                  </h1>
                  <p className="h-auto card-text text-sm text-start lg:text-xs overflow-hidden">
                    {val.text}
                  </p>
                </div>
                <div className="flex items-center justify-center px-4 w-full">
                  <a
                    className="w-full bg-gradient-to-b from-slate-900  to-black shadow-md shadow-black
                  text-center text-slate-100 py-1.5 button-theme mb-2
                  "
                  >
                    {val.btn}
                  </a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Stories;
