import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../lib/helper";



export const getAllUsers = createAsyncThunk(
  "users/getAll",
  async () => {
    const res = await getUsers();
    return res;
  }
);

