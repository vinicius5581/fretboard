import React from "react";
import Fret from "./Fret";

/**
 * 1 fret === 1/2 ton
 *     1      1     1/2     1     1      1      1/2
 * C      D      E      F      G      A      B      C
 */

// C C# D D# E F F# G G# A A# B C
// C Db D Eb E F Cb G Ab A Bb B C

const notesSus = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const notesBem = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Cb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

function renderFrets(
  fretsQty,
  stringNote,
  stringPosition,
  fretboard,
  isMirror
) {
  const fretsList = [];
  let stringNoteSusIndex = notesSus.indexOf(stringNote);

  for (let fretPosition = 1; fretPosition <= fretsQty; fretPosition++) {
    const fret = fretboard?.string[stringPosition]?.fret[fretPosition];

    const noteColor = fret?.note
      ? fretboard.string[stringPosition].fret[fretPosition]?.noteColor ||
        fretboard.string[stringPosition]?.noteColor ||
        fretboard?.noteColor
      : "white";

    const leftFretColor = fret?.left
      ? fretboard.string[stringPosition].fret[fretPosition]?.fretColor ||
        fretboard.string[stringPosition]?.fretColor ||
        fretboard?.fretColor
      : "white";

    const rightFretColor = fret?.right
      ? fretboard.string[stringPosition].fret[fretPosition]?.fretColor ||
        fretboard.string[stringPosition]?.fretColor ||
        fretboard?.fretColor
      : "white";

    stringNoteSusIndex =
      stringNoteSusIndex === notesSus.length - 1 ? 0 : stringNoteSusIndex + 1;

    fretsList.push(
      <Fret
        key={fretPosition}
        position={fretPosition}
        stringNote={stringNote}
        stringPosition={stringPosition}
        note={notesSus[stringNoteSusIndex]}
        noteColor={noteColor || "white"}
        leftFretColor={leftFretColor}
        rightFretColor={rightFretColor}
        isMirror={isMirror}
      />
    );
  }
  return fretsList;
}

function String({ stringPosition, stringNote, fretsQty, fretboard, isMirror }) {
  return (
    <div className="string">
      <div className="stringNote">
        <span className="label">{stringNote}</span>
      </div>
      <span className="playIt">x</span>

      <div className="arm">
        <div className="line"></div>
        {renderFrets(fretsQty, stringNote, stringPosition, fretboard, isMirror)}
      </div>
    </div>
  );
}

export default String;
