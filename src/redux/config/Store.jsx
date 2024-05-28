import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../modules/ItemSlice'

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;
