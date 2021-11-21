import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../constants/index";

export const fetchPhoto = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=4`
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Не удалось загрузить астрономические картинки"
      );
    }
  }
);

export const randomPhotoSlice = createSlice({
  name: "randomPhoto",
  initialState: {
    photoData: [],
    dataClicker: "1"
  },
  reducers: {
    getAnotherPosts: (state, action) => {
      state.dataClicker += 1;
    }
  },
  extraReducers: {
    [fetchPhoto.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.photoData = action.payload;
    },
    [fetchPhoto.pending.type]: (state, action) => {
      state.photoData = action.meta.arg;
      state.isLoading = true;
    },
    [fetchPhoto.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { getAnotherPosts } = randomPhotoSlice.actions;
export default randomPhotoSlice.reducer;
