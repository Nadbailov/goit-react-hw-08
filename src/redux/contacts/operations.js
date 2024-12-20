import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goItApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await goItApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/ddContact",
  async (contact, thunkApi) => {
    try {
      const { data } = await goItApi.post("/contacts", contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await goItApi.delete(`contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);