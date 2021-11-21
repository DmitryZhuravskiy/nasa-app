import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../constants/index";

export const fetchPhoto = createAsyncThunk(
  "user/fetchAll",
  async (dateOfStartSubmit, dateOfEndSubmit, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${dateOfStartSubmit}&end_date=${dateOfEndSubmit}`
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Не удалось загрузить астрономические картинки"
      );
    }
  }
);

export const photoChoiseSlice = createSlice({
  name: "photoChoise",
  initialState: {
    photoData: [],
    dateOfStartDay: "02",
    dateOfStartMonth: "01",
    dateOfStartYear: "2016",
    dateOfStartSubmit: "2016-01-02",
    dateOfEndDay: "05",
    dateOfEndMonth: "01",
    dateOfEndYear: "2016",
    dateOfEndSubmit: "2016-01-05",
    pageCount: `$(state.photoData.length)`,
    activePage: "1",
    startPage: "1",
    endPage: "4",
    pageNumbers: [],
    perPage: 5
  },

  reducers: {
    setStartDay: (state, action, e) => {
      state.dateOfStartDay = action.payload;
    },
    setStartMonth: (state, action) => {
      state.dateOfStartMonth = action.payload;
    },
    setStartYear: (state, action) => {
      state.dateOfStartYear = action.payload;
    },
    setEndDay: (state, action, e) => {
      state.dateOfEndDay = action.payload;
    },
    setEndMonth: (state, action) => {
      state.dateOfEndMonth = action.payload;
    },
    setEndYear: (state, action) => {
      state.dateOfEndYear = action.payload;
    },
    submitStartDate: (state, action) => {
      state.dateOfStartSubmit = action.payload;
    },
    submitEndDate: (state, action) => {
      state.dateOfEndSubmit = action.payload;
    },
    setPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
    changeActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    changeStartPage: (state, action, e) => {
      state.startPage = action.payload;
    },
    changeEndPage: (state, action) => {
      state.endPage = action.payload;
    },
    setPageNumbers: (state, action) => {
      state.pageNumbers = action.payload;
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
  setStartDay,
  setStartMonth,
  setStartYear,
  setEndDay,
  setEndMonth,
  setEndYear,
  setPageCount,
  changeActivePage,
  changeStartPage,
  changeEndPage,
  setPageNumbers
} = photoChoiseSlice.actions;
export default photoChoiseSlice.reducer;
