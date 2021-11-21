import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Photo from "./features/photo/Photo";
import NavBar from "./components/NavBar";
import NasaRandomPhoto from "./features/randomPhoto/NasaRandomPhoto";
import NasaPhotoChoise from "./features/photoChoise/NasaPhotoChoise";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Photo />} path="nasaphoto" />
          <Route element={<NavBar />} path="navbar" />
          <Route element={<NasaRandomPhoto />} path="random-nasaphoto" />
          <Route element={<NasaPhotoChoise />} path="nasa-photos-choise" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
