import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiKey from "../../constants";

const initialState = {
  photoData: null,
  dateOfStart: "2016-01-02",
  dateOfEnd: "2016-01-05",
  status: '',
};

export const fetchGalery = createAsyncThunk(
  "galery/fetchGalery",
  async (answer) => {
    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${answer}`
    );
    return data;
  }
);

export const photoSlice = createSlice({
  name: "galery",
  initialState,
  reducers: {
    changeStart: (state, action) => {
      state.dateOfStart = action.payload;
    },
    changeEnd: (state, action) => {
        state.dateOfEnd = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGalery.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchGalery.fulfilled, (state, action) => {
      state.photoData = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchGalery.rejected, (state) => {
      state.photoData = [];
      state.status = "error";
    });
  },
});

export const { changeStart, changeEnd } = photoSlice.actions;
export default photoSlice.reducer;
