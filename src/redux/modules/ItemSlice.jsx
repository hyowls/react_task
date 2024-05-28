// src/redux/reducers/itemsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  selectedMonth: 0,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('items', JSON.stringify(state.items))
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => String(item.id) !== String(action.payload));
      localStorage.setItem('items', JSON.stringify(state.items))
    },
    updateItem: (state, action) => {
      const { id, date, title, content, price } = action.payload;
      const itemIndex = state.items.findIndex(item => String(item.id) === String(id));
      if (itemIndex !== -1) {
        state.items[itemIndex] = { id, date, title, content, price };
        localStorage.setItem('items', JSON.stringify(state.items))
      }
    },
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
      localStorage.setItem('selectedMonth', action.payload)
    },
  },
});

export const { addItem, deleteItem, updateItem, setSelectedMonth } = itemsSlice.actions;
export default itemsSlice.reducer;
