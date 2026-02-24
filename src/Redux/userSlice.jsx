// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//   },
// });

// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  showProfile: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    logoutUser: (state) => {
      state.userData = null;
      state.showProfile = false;
    },
    toggleProfile: (state) => {
      state.showProfile = !state.showProfile;
    },
    closeProfile: (state) => {
      state.showProfile = false;
    },
  },
});

export const {
  setUser,
  logoutUser,
  toggleProfile,
  closeProfile,
} = userSlice.actions;

export default userSlice.reducer;