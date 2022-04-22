import productData from "../mockdata/productData";
const defaultState = productData;

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return state;

    case "ADD_NEW_PRODUCT":

        return [...state, action.payload];

    default:
      return state;
  }
};