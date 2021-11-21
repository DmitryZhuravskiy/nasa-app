import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../constants/index";

export const fetchPhoto = createAsyncThunk(
  "user/fetchAll",
  async (dateOfPhotoSubmit, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateOfPhotoSubmit}`
      );

      return data;
      //data.hits.map(({ recipe }) => recipe);
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Не удалось загрузить астрономические картинки"
      );
    }
  }
);

export const photoSlice = createSlice({
  name: "photo",
  initialState: {
    photoData: [],
    dateOfDay: "01",
    dateOfMonth: "02",
    dateOfYear: "2016",
    dateOfPhotoSubmit: "2016-01-02"
  },
  reducers: {
    handleChangeDay: (state, action, e) => {
      state.dateOfDay = action.payload;
    },
    handleChangeMonth: (state, action) => {
      state.dateOfMonth = action.payload;
    },
    handleChangeYear: (state, action) => {
      state.dateOfYear = action.payload;
    },
    handleSubmit: (state, action, e) => {
      e.preventDefault();
      state.dateOfPhotoSubmit = `${state.dateOfYear}-${state.dateOfMonth}-${state.dateOfDay}`;
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

export const {
  handleChangeDay,
  handleChangeMonth,
  handleChangeYear,
  handleSubmit
} = photoSlice.actions;
export default photoSlice.reducer;