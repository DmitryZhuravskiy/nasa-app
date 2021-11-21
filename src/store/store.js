import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "../features/photo/photoSlice";
import randomPhotoReducer from "../features/randomPhoto/randomPhotoSlice";
import photoChoiseReducer from "../features/photoChoise/photoChoiseSlice";

export default configureStore({
  reducer: {
    photo: photoReducer,
    randomPhoto: randomPhotoReducer,
    photoChoise: photoChoiseReducer
  }
});