import React from "react";
import Fret from "./Fret";
import "./Fretboard.css";

function Fretboard() {
  return (
    <div className="fretboard">
      <Fret position={1} />
      <Fret position={2} />
      <Fret position={3} />
      <Fret position={4} />
      <Fret position={5} />
      <Fret position={6} />
      <Fret position={7} />
      <Fret position={8} />
      <Fret position={9} />
      <Fret position={10} />
      <Fret position={11} />
      <Fret position={12} />
    </div>
  );
}

export default Fretboard;
