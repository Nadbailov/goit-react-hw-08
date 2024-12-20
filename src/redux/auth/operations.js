import { createAsyncThunk } from "@reduxjs/toolkit";
import { goItApi } from "../contacts/operations";

const setAuthHeader = (token) => {
  goItApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goItApi.post("/users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goItApi.post("/users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await goItApi.post("/users/logout");
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  try {
    const saveToken = thunkApi.getState().auth.token;
    if (!saveToken) {
      return thunkApi.rejectWithValue("Token not found");
    }
    setAuthHeader(saveToken);
    const { data } = await goItApi.get("/users/current");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});