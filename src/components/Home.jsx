import React from "react";
import Clips from "../mini-components/Clips";
import SocialLink from "../mini-components/SocialLink";

const Home = ({ heroapi }) => {
  const { title, subtitle, img, btntext, videos, sociallinks } = heroapi;

  return (
    <>
      <section
        className="relative h-auto w-auto
      flex flex-col
      "
      >
        {/* Background */}

        <div
          className="bg-theme clip-path
        h-[85vh] lg:h-auto   w-auto absolute top-0 left-0 right-0
        bottom-0 opacity-100 z-10 
        "
        ></div>

        {/* Background */}

        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-16 md:mt-18">
            {/* Header Title */}

            <h1 className="text-5xl md:text-center lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200 md:mb-4 mb-6">
              {title}
            </h1>

            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {subtitle}
            </h1>

            {/* Header Title */}
            <button className="button-theme bg-slate-200 shadow-slate-200 rounded-sm transition-all duration-500 my-8 md:my-10">
              {btntext}
            </button>
            {/* Videos Links */}
            <div className="grid items-center gap-5 md:gap-3 absolute top-[25vh] xl:top-[40vh] left-[0%] xl:left-0 w-auto h-auto  sm:hidden">
              {videos?.map((video, index) => (
                <Clips key={index} video={video} />
              ))}
            </div>
            {/* Videos Links */}

            {/* Social Links */}
            <div className="grid items-center absolute top-[35vh] md:top-[45vh] sm:hidden right-0 gap-3">
              {sociallinks?.map((social, index) => (
                <SocialLink key={index} icon={social.icon} />
              ))}
            </div>
            {/* Social Links */}
          </div>
          {/* Product Img */}
          <div className="">
            <img
              src={img}
              alt="hero-img/img"
              className="mt-5 md:mt-5 w-[50vh] h-auto lg:h-[35vh] md:h[31vh] sm:h-[25vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer"
            />
            {/* Product Img */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
