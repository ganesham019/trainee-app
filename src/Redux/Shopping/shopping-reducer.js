import * as actionTypes from "./shopping-type";

const INITIAL_STATE = {
  products: [], // {id,price,title,img,desc}
  cart: [], // {id,price,title,img,desc,qty}
  currenItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //find the product array
      const item = state.products.find((prod) => prod.id === action.payload.id);
      //find already the item in cart
      const incart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: incart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_TO_CART:
      return {};
    case actionTypes.ADJUST_CART:
      return {};
    case actionTypes.LOAD_ITEM:
      return {};
    default:
      return state;
  }
};
export default shopReducer;
