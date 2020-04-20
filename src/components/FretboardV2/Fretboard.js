import React, { useState, useEffect } from "react";
import String from "./String";
import ChooseViewDropDown from "../Form/ChooseViewDropDown";
import ChooseChordsDropDown from "../Form/ChooseChordsDropDown";
import "./Fretboard.css";

import {
  gMajor,
  amMajor,
  aChord,
  bMajor,
  dMajor,
  eMajor,
  cChord,
  dChord,
  eChord,
  gChord,
} from "../../chords/chords";

const chords = {
  gMajor: gMajor,
  amMajor: amMajor,
  bMajor: bMajor,
  dMajor: dMajor,
  eMajor: eMajor,
  aChord: aChord,
  cChord: cChord,
  dChord: dChord,
  eChord: eChord,
  gChord: gChord,
};

const stringsClassicView = [
  { position: 1, stringNote: "E" },
  { position: 2, stringNote: "B" },
  { position: 3, stringNote: "G" },
  { position: 4, stringNote: "D" },
  { position: 5, stringNote: "A" },
  { position: 6, stringNote: "E" },
];

const stringsMirrorView = [
  { position: 6, stringNote: "E" },
  { position: 5, stringNote: "A" },
  { position: 4, stringNote: "D" },
  { position: 3, stringNote: "G" },
  { position: 2, stringNote: "B" },
  { position: 1, stringNote: "E" },
];

function Fretboard({ fretboard, fretsQty }) {
  const [chord, setChord] = useState("gMajor");
  const [view, setView] = useState("classic-view-right-hand");

  const RenderFretboard = (strings, fretsQty, chord) => {
    if (view === "mirror-view-right-hand") {
      return (
        <>
          {stringsMirrorView.map((string) => {
            return (
              <String
                key={`${string.stringNote}-${string.position}`}
                stringPosition={string.position}
                stringNote={string.stringNote}
                fretsQty={fretsQty}
                fretboard={chord}
                isMirror={true}
              />
            );
          })}
        </>
      );
    }

    return (
      <>
        {stringsClassicView.map((string) => {
          return (
            <String
              key={`${string.stringNote}-${string.position}`}
              stringPosition={string.position}
              stringNote={string.stringNote}
              fretsQty={fretsQty}
              fretboard={chord}
            />
          );
        })}
      </>
    );
  };

  // console.log(view, chord);

  return (
    <div className="freetboard-wrapper">
      <div>
        {ChooseViewDropDown(view, setView)}
        {ChooseChordsDropDown(chord, setChord)}
      </div>
      <h1>{chords[chord].name}</h1>
      <div className="fretboard">
        {RenderFretboard(stringsMirrorView, fretsQty, chords[chord])}
      </div>
    </div>
  );
}

export default Fretboard;
