import React from "react";

const Footer = ({ footerAPI }) => {
  const { titles, links } = footerAPI;
  const date = new Date();

  return (
    <footer className="bg-theme pt-7 md:pt-2">
      <div className="nike-container text-slate-200 mb-14">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-items-start items-start grid-cols-3  w-full m-auto md:max-w-none gap-12 md:gap-4">
          {links.map((list, i) => (
            <ul key={i} className="grid items-center gap-2 mt-2">
              <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold cursor-pointer">
                {titles[i].title}
              </h1>
              {list.map((val, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-xs cursor-pointer hover:pl-2 
                border-transparent hover:border-l-red-500 hover:border-l-[5px] transition-all duration-300 hover:text-[.95rem]"
                >
                  {val.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="bg-blue-400 flex items-center">
        <div className="md:flex-col md:gap-2 w-11/12 py-2 text-slate-900 flex justify-between mx-auto  text-center relative bottom-0">
          <p className="text-sm  text-start md:text-center">
            Copyright &copy; All Reserved Rights {date.getFullYear()}
          </p>
          <p>
            Developed by <span className="font-semibold"> LWHA</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
