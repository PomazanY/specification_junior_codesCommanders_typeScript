
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserByUsername = createAsyncThunk(
  "auth/fetchUser",
  async (username: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?username=${username}`
      );

      if (response.data.length === 0) {
        // пользователь не найден
        return rejectWithValue("Пользователь не найден");
      }

      // найден — возвращаем первого
      return response.data[0];
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
