import { createSlice } from "@reduxjs/toolkit";

import { fetchUserByUsername } from "./auth-thunks";


export interface AuthState {
  user: unknown | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByUsername.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserByUsername.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserByUsername.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
