import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: {
      reducer: (state, action) => { // declara o reducer
        state.items = [...state.items, action.payload];
      },
      prepare: (content) => { // especifica a estrutura da action
        return {
          payload: {
            title: content.title,
            price: content.price,
            fixedPrice: content.fixedPrice,
            quantity: 1,
            id: content.id,
          },
        };
      },
    },
    removeCart: (state, action) => {
      // remove o item baseando-se no id passado
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    incrementItem: (state, action) => {
      // incrementa a quantidade do item baseando-se no id passado
      state = {
        ...state,
        items: state.items.map((item) => {
          return item.id === action.payload.id
            ? (item.quantity++, (item.price = item.fixedPrice * item.quantity))
            : false;
        }),
      };
    },
    decrementItem: (state, action) => {
      // incrementa a quantidade do item baseando-se no id passado
      state = {
        ...state,
        items: state.items.map((item) => {
          return item.id === action.payload.id
            ? (item.quantity--, (item.price -= item.fixedPrice))
            : false;
        }),
      };
    },
  },
});

// exportando as actions
export const {
  addCart,
  removeCart,
  incrementItem,
  decrementItem,
} = cartSlice.actions;

// Getter de todos os States
export const getCart = (state) => state.cart;

export default cartSlice.reducer;
