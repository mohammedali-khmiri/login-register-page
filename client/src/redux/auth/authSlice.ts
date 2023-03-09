import { createSlice } from "@reduxjs/toolkit";




export const authSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: { userName: "", email: "", password: "" },
    isPending: false,
    error: false,
  },
  reducers: {
    registerStart: (state) => {
      state.isPending = false;
    },
    registerSuccess: (state, action) => {
      state.isPending = true;
      state.userInfo = action.payload;
    },
    registerFailure: (state) => {
      state.isPending = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { registerStart, registerSuccess, registerFailure } =
  authSlice.actions;

export default authSlice.reducer;
