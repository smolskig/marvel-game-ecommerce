import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counter/counterSlice';
import cartSlice from '../slices/cart/cartSlice'
import gamesSlice  from '../slices/games/gamesSlice';
import uiSlice  from '../slices/ui/uiSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart:cartSlice,
    games:gamesSlice,
    ui:uiSlice
  },
});
