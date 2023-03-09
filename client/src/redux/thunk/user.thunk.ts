import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeRequest } from "../axios";

export const register = createAsyncThunk("/auth/register", async (user) => {
  const res = await makeRequest.post("auth/register", user);
  return res.data
});
