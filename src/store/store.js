import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../slices/cart/cartSlice'
import gamesSlice  from '../slices/games/gamesSlice';
import uiSlice  from '../slices/ui/uiSlice';

export default configureStore({
  reducer: {
    cart:cartSlice,
    games:gamesSlice,
    ui:uiSlice
  },
});
