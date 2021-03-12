import { HashRouter, Route } from "react-router-dom";
import Home from "./component/Home";
import NasaPhoto from "./component/NasaPhoto";
import NasaRandomPhoto from "./component/NasaRandomPhoto";
import NasaPhotosChoise from "./component/NasaPhotosChoise";
import NavBar from "./component/NavBar";

import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
        <Route component={NavBar} path="/navbar" />
        <Route component={NasaRandomPhoto} path="/random-nasaphoto" />
        <Route component={NasaPhotosChoise} path="/nasa-photos-choise" />
      </div>
    </HashRouter>
  );
}

export default App;
