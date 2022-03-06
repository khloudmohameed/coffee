import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Offers from './Components/Offers/Offers';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Offers/>
    </>
  );
}

export default App;
