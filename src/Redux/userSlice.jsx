
// import { createSlice } from "@reduxjs/toolkit";
// import myapi from "../api/myapi";

// const initialState = {
//   userData: null,
//   showProfile: false,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.userData = action.payload;
//     },
//     logoutUser: (state) => {
//       state.userData = null;
//       state.showProfile = false;
//     },
//     toggleProfile: (state) => {
//       state.showProfile = !state.showProfile;
//     },
//     closeProfile: (state) => {
//       state.showProfile = false;
//     },
//     xyz: (state,action)=>{
//           state.userData=action.payload
//     },
//   },
// });

// export const {
//   setUser,
//   logoutUser,
//   toggleProfile,
//   closeProfile,

// } = userSlice.actions;

// export default userSlice.reducer;