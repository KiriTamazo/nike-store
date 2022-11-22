import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const CartCount = ({ onCartToggle, onClearCartItem, totalQty }) => {
  return (
    <aside className="bg-white flex items-center justify-between py-2 px-3 sticky top-0 left-0 right-0 w-full">
      <div className="flex items-center gap-3">
        <div className="grid items-center cursor-pointer">
          <ChevronDoubleLeftIcon
            onClick={onCartToggle}
            className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]"
          />
        </div>
        <div className="">
          <h1 className="text-base font-normal text-slate-900">
            Your Cart{" "}
            <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 text-xs">
              {totalQty}
            </span>
          </h1>
        </div>
      </div>
      <div className="flex items-center rounded">
        <button
          onClick={onClearCartItem}
          className=" rounded bg-theme-cart active:scale-90 p-0.5"
        >
          <XMarkIcon className="w-5 h-5 text-white stroke-[2]" />
        </button>
      </div>
    </aside>
  );
};

export default CartCount;
