import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Read Action
export const showCourses = createAsyncThunk(
  "showCourses",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://64e34487bac46e480e787ecb.mockapi.io/idea"
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//ShowCourseDetails
export const courseOne = createAsyncThunk(
  "courseOne",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://64e34487bac46e480e787ecb.mockapi.io/idea/${id}`
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const courseDetail = createSlice({
  name: "courseDetail",
  initialState: {
    courses: [],
    details: [],
    dash: [],
    searchData: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToDashboard: (state, action) => {
      const isItemInDash = state.dash.find(
        (item) => item.id === action.payload.id
      );

      if (isItemInDash) {
        const tempDash = state.dash.map((item) => {
          if (item.id === action.payload.id) {
            alert("Course is already enrolled");

            return {
              ...item,
            };
          } else {
            return item;
          }
        });

        state.dash = tempDash;
      } else {
        state.dash.push(action.payload);
      }
    },

    searchCourse: (state, action) => {
      state.searchData = action.payload;
    },

    increaseItemQuantity: (state, action) => {
      state.courses = state.courses.map((item) => {
        if (item.id === action.payload) {
          return { ...item, likes: item.likes + 1 };
        }
        return item;
      });
    },
  },
  extraReducers: {
    [showCourses.pending]: (state) => {
      state.loading = true;
    },
    [showCourses.fulfilled]: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    [showCourses.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [courseOne.pending]: (state) => {
      state.loading = true;
    },
    [courseOne.fulfilled]: (state, action) => {
      state.loading = false;

      const { id } = action.payload;
      if (id) {
        state.details = state.courses.filter((ele) => ele.id === id);
      }
    },
    [courseOne.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addToDashboard, searchCourse, increaseItemQuantity } =
  courseDetail.actions;

export default courseDetail.reducer;
