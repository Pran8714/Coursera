import { configureStore } from '@reduxjs/toolkit';
import  courseDetail  from '../features/courseDetailSlice';

export const store = configureStore({
  reducer: {
    app: courseDetail,
  },
})