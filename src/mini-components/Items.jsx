import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../app/CartSlice";

const Items = ({
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
  wide,
}) => {
  const dispatch = useDispatch();
  const onAddCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(item));
  };
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
        wide ? "justify-items-start" : "justify-items-center"
      } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full ${
        wide ? "h-auto" : "min-h-[430px]"
      } hover:scale-105`}
    >
      {/* Title Text */}
      <div
        className={`grid items-center gap-2 ${
          wide ? "justify-items-start" : "justify-items-center"
        }`}
      >
        <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow text-center">
          {title}
        </h1>
        <p className="text-slate-200  filter drop-shadow text-base md:text-sm font-normal">
          {text}
        </p>
        <div className="flex items-center justify-between w-28 my-2 blue-effect-theme">
          {/* Price */}
          <div className="flex items-center bg-white/80 px-1 rounded">
            <h1 className="text-black text-sm font-medium">${price}</h1>
          </div>
          {/* Rating */}
          <div className="flex items-center gap-1">
            <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
            <h1 className="md:text-sm font-normal text-slate-100">{rating}</h1>
          </div>
        </div>
        {/* Shop Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onAddCart()}
            className="bg-white/90 blue-effect-theme button-theme p-1 shadow-slate-200"
          >
            <ShoppingBagIcon className="icon-style text-slate-900" />
          </button>
          <button
            onClick={() => {
              onAddCart();
              onCartToggle();
            }}
            className="bg-white/90 blue-effect-theme button-theme px-2 py-1 shadow-sky-200 text-sm"
          >
            {btn}
          </button>
        </div>
      </div>
      {/* Img */}
      <div
        className={`flex items-center ${
          wide ? "absolute top-10  right-1" : "justify-center"
        } mt-5`}
      >
        <img
          src={img}
          alt={`img/item-img/${id}`}
          className={`transitions-theme hover:-rotate-12 ${
            wide
              ? "h-auto w-32  xl:w-48 lg:w-28  md:w-36 -rotate-[35deg]"
              : "h-36 w-64"
          }`}
        />
      </div>
    </div>
  );
};

export default Items;
