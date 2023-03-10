// import {
//   registerFailure,
//   registerStart,
//   registerSuccess,
// } from "./auth/authSlice";
// import { makeRequest } from "./axios";

// export const register = async (user, dispatch) => {
//   dispatch(registerStart());
//   try {
//     const res = await makeRequest.post("auth/register", user);
//     dispatch(registerSuccess(res.data));
//   } catch (error) {
//     dispatch(registerFailure);
//   }
// };
