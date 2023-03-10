import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../thunk/user.thunk";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: { userName: "", email: "", password: "" },
    pending: null,
    error: false,
  },
  reducers: {
    // registerStart: (state) => {
    //   state.isPending = false;
    // },
    // registerSuccess: (state, action) => {
    //   state.isPending = true;
    //   state.userInfo = action.payload;
    // },
    // registerFailure: (state) => {
    //   state.isPending = false;
    //   state.error = true;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.pending = null;
      state.error = true;
    });
    builder.addCase(login.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.pending = null;
      state.error = true;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { registerStart, registerSuccess, registerFailure } =
//   authSlice.actions;

export default authSlice.reducer;
