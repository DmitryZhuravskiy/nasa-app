import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiKey from "../../constants";

const initialState = {
  photoData: null,
  dateOfPhotoSubmit: "2016-01-02",
};

export const fetchPhoto = createAsyncThunk(
  "photo/fetchPhoto",
  async (dateOfPhotoSubmit) => {
    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateOfPhotoSubmit}`
    );
    return data;
  }
);

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    handleSubmit: (state, action) => {
      state.dateOfPhotoSubmit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhoto.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPhoto.fulfilled, (state, action) => {
      state.photoData = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPhoto.rejected, (state) => {
      state.photoData = [];
      state.status = "error";
    });
  },
});

export const { handleSubmit } = photoSlice.actions;
export default photoSlice.reducer;
