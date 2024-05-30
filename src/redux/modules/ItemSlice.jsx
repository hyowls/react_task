// src/redux/reducers/itemsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      "id": "25600f72-56b4-41a7-a9c2-47358580e2f8",
      "date": "2024-01-05",
      "title": "식비",
      "price": 100000,
      "content": "세광양대창"
  },
  {
      "id": "25600f72-53b4-4187-a9c2-47358580e2f8",
      "date": "2024-01-10",
      "title": "도서",
      "price": 40500,
      "content": "모던 자바스크립트"
  },
  {
      "id": "24310f72-56b4-41a7-a9c2-458580ef1f8",
      "date": "2024-02-02",
      "title": "식비",
      "price": 50000,
      "content": "회식"
  },
  {
      "id": "25600f72-99b4-41z7-e4h6-47312365e2f8",
      "date": "2024-02-02",
      "title": "간식",
      "price": 500,
      "content": "아이스크림"
  },
  {
      "id": "25143e72-16e2-22a7-a9c2-47358580e2f8",
      "date": "2024-02-02",
      "title": "여행",
      "price": 1055000,
      "content": "일본여행"
  },
  {
      "id": "25600f72-97p2-14a7-a9c2-47363950e2t8",
      "date": "2024-02-02",
      "title": "미용",
      "price": 155000,
      "content": "미용실"
  },
  {
      "id": "24312f70-97q2-14a7-a9c2-47132950e2t8",
      "date": "2024-02-02",
      "title": "도서",
      "price": 75000,
      "content": "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발"
  }
  ],
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
