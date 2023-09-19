import "./App.css";
import { useState } from "react";
import NavBar from "./component/NavBar";
import PriceOptions from "./component/PriceOptions";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
