import React from "react";
import "./App.css";
import FretboardV2 from "./FretboardV2/Fretboard";

function App() {
  return (
    <div className="App">
      <FretboardV2 fretsQty={6} />
    </div>
  );
}

export default App;
