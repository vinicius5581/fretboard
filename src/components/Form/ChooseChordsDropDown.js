import React from "react";

function ChooseChordsDropDown(chord, setChord) {
  const items = [
    { label: "G Major Scale - G Ionian - 1st position", value: "gMajor" },
    { label: "G Major Scale - A Dorian - 2nd position", value: "amMajor" },
    { label: "G Major Scale - B Phrygian - 3rd position", value: "bMajor" },
    { label: "G Major Scale - D Mixolyd - 4th position", value: "dMajor" },
    { label: "G Major Scale - E Aeolian - 5th position", value: "eMajor" },
    { label: "aChord", value: "aChord" },
    { label: "cChord", value: "cChord" },
    { label: "dChord", value: "dChord" },
    { label: "eChord", value: "eChord" },
    { label: "gChord", value: "gChord" },
  ];

  return (
    <select onChange={(e) => setChord(e.currentTarget.value)}>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default ChooseChordsDropDown;
