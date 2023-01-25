import { Bars3Icon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartSlice, {
  selectCartItem,
  selectTotalQty,
  setOpenCart,
} from "../app/CartSlice";
import useMediaQuery from "../hooks/useMediaQuery";
import ListItem, { navLinks } from "../mini-components/ListItem";

const Navbar = ({sticky, matches, setOpen }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItem);
  const totalQty = useSelector(selectTotalQty);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  

  return (
    <>
      <header
        className={`${
          !sticky
            ? `fixed top-0 left-0 h-[9vh] flex items-center right-0 opacity-100 z-50`
            : " shadow-sm opacity-100 z-[200] blur-effect-theme slideInDown"
        } flex items-center justify-center fixed top-0 right-0 left-0 h-[12vh] z-200 animate`}
      >
        <nav className="flex items-center justify-between nike-container">
          {/* Mobile Nav */}
          {matches && (
            <div onClick={() => setOpen(true)}>
              <Bars3Icon
                className={`icon-style ${sticky && "text-slate-900"}`}
              />
            </div>
          )}

          {/* Mobile Nav */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 lg:w-12 h-auto  ${
                sticky && "filter brightness-0"
              }`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            {/* For Desktop Link */}
            {!matches &&
              navLinks.map((link, i) => (
                <ListItem key={i} {...link} sticky={sticky} />
              ))}
            {/* For Desktop Link */}

            <li className="grid items-center">
              <button
                onClick={onCartToggle}
                className="border-none outline-none active:scale-110 transition-all
              duration-300 relative
              "
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    sticky && "text-slate-900 transition-all duration-300"
                  }`}
                />
                {cartItems.length > 0 && (
                  <span
                    className={`absolute -top-1 -right-2 bg-red-400 text-white shadow-slate-100
                  w-4 h-4 text-[0.6rem] leading-tight font-medium rounded flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300
                  `}
                  >
                    {totalQty}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
