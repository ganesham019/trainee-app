import * as actionTypes from "./shopping-type";

export const addtocart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removefromcart = (itemID) => {
  return {
    type: actionTypes.REMOVE_TO_CART,
    payload: {
      id: itemID,
    },
  };
};
export const adjustqty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_CART,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
export const loaditem = (item) => {
  return {
    type: actionTypes.LOAD_ITEM,
    payload: item,
  };
};
