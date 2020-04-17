import React from "react";

function ChooseChordsDropDown(chord, setChord) {
  const items = [
    { label: "gMajor", value: "gMajor" },
    { label: "amMajor", value: "amMajor" },
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
