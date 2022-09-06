import { dividerClasses } from "@mui/material";
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from "./constant";
export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      //add to cart logic
      console.log("PRODUCT LIDT condition---SET_PRODUCT_LIST ", action.type);
      return [...action.data.products];

    case 'SEARCH_PRODUCT_NEW':
      //add to cart logic
      console.log("PRODUCT LIDT condition ---SEARCH_PRODUCT", action.data);
      <div>
        {action.data}
      </div>
      if (action.data?.products) {
        return [...action.data.products];
        
      }
      return [...data];

    default:
      return data;
  }
};
