import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";
export const addToCart = (data) => {
  console.warn("action is called", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
export const RemoveFormCart = (data) => {
  console.warn("remove action is called", data);
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};
export const EmptyCart = (data) => {
  console.warn("Empty cart is called");
  return {
    type: EMPTY_CART,
  };
};
