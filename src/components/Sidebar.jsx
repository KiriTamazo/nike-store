import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ListItem, { navLinks } from "../mini-components/ListItem";

const Sidebar = ({ open, setOpen }) => {
  return (
    <aside
      className={` ${
        open
          ? " translate-x-0 visible opacity-100"
          : "-translate-x-[100%] invisible opacity-0"
      } fixed bg-white w-[50%] h-full z-[350] transition-all  duration-500 ease-in-out`}
    >
      <div
        onClick={() => setOpen(false)}
        className="flex justify-end relative top-[5%] right-[10%]"
      >
        <XMarkIcon className="icon-style text-slate-900 w-[30px] h-[30px]" />
      </div>
      <ul className="flex flex-col gap-8 justify-center items-center w-full h-full">
        {navLinks.map((link, i) => (
          <ListItem key={i} {...link} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
