import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItem: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.success(`${action.payload.title} Quantity Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(temp);

        toast.success(`${action.payload.title} added to Cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItem = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItem));

      toast.success(`${action.payload.title} removed from Cart`);
    },
    setIncreaseItemQty: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.success(`${action.payload.title} Quantity Increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    setDecreaseItemQty: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
        toast.success(`${action.payload.title} Quantity Decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    setClearCartItem: (state, action) => {
      state.cartItem = [];
      toast.success(`Cart Clear`);
      localStorage.setItem("cart", state.cartItem);
    },
    setGetTotals: (state, action) => {
      const { totalAmount, totalQty } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          console.log(cartItem);
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;
          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQty += cartQuantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQty: 0,
        }
      );
      console.log(totalAmount, totalQty);
      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQty;
    },
  },
});

export const {
  setCloseCart,
  setOpenCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQty,
  setDecreaseItemQty,
  setClearCartItem,
  setGetTotals,
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItem = (state) => state.cart.cartItem;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQty = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
