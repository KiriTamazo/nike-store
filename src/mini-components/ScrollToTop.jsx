import { ArrowUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useEffect } from "react";
import { animateScroll } from "react-scroll";

const ScrollToTop = ({ sticky }) => {
  return (
    <div
      onClick={() => animateScroll.scrollToTop(0)}
      className={`fixed z-[111111] bg-blue-500 rounded p-2 bottom-5 right-5 w-25 h-25
      ${!sticky && "hidden"}
      `}
    >
      <ArrowUpIcon className="icon-style" />
    </div>
  );
};

export default ScrollToTop;
