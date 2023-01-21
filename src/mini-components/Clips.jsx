import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
const Clips = ({ video }) => {
  console.log(video);
  return (
    <div className=" group relative w-24 h-24  rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 xl:w-16 xl:h-16 ">
      <img
        src={video.imgsrc}
        alt="img/clips"
        className="z-10 opacity-100 inset-0 flex rounded-xl h-full w-full object-cover absolute transition-opacity duration-500"
      />
      <div className="bg-white blur-effect-theme absolute top-[35%] xl:top-[25%] xl:left-[25%] left-[35%] md:top-[35%] md:left-[35%] opacity-100 z-[100] w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-full group-hover:hidden">
        <PlayIcon className="icon-style  text-slate-900 md:w-3 md:h-3 " />
      </div>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="absolute inset-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl"
      >
        <source type="video/mp4" src={video.clip} />
      </video>
    </div>
  );
};

export default Clips;
