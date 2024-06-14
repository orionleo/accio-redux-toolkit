import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    return data;
  } catch (error) {
    return [{ id: "0", name: "jai aggarwal" }];
  }
});

export const fetchUser = createAsyncThunk("fetchUser", async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
});

export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  return id;
});

export const updateUser = createAsyncThunk(
  "updateUser",
  async ({id, updatedUser}) => {
    console.log(id,updatedUser);
    const { data } = await axios.patch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updatedUser
    );
    return data;
  }
);

export const newUser = createAsyncThunk("newUser", async (user) => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/users/",
    user
  );
  return data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {},
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      })
      .addCase(newUser.fulfilled, (state, action) => {
        state.users = [...state.users, action.payload];
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      });
  }, // extraReducers
});

export default userSlice.reducer;
