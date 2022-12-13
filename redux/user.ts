import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";
import { getAllUsers } from "./fetchUsers";

const initialState = {
  user: { toggleForm: false },
  userList: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.user.toggleForm = !state.user.toggleForm;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      // state.status = "loading";
      // state.error = null;
    });

    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
   //   console.log(payload);
      state.userList.push(...payload);
    });

    builder.addCase(getAllUsers.rejected, (state, { payload }) => {
      // if (payload) state.error = payload.message;
      //state.status = "failed";
    });
  },
});

export const { toggleChangeAction } = UserSlice.actions;
export default UserSlice.reducer;
