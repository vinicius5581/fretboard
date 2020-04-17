import React from "react";

function Fret({
  position,
  stringNote,
  stringPosition,
  note,
  noteColor,
  leftFretColor,
  rightFretColor,
  isMirror,
}) {
  const topString = isMirror ? 6 : 1;
  console.log(stringPosition, topString);
  return (
    <div className="fret">
      {stringPosition === topString && (
        <span className="position">{position}</span>
      )}

      <div className="left" style={{ background: leftFretColor }}></div>
      <div className="right" style={{ background: rightFretColor }}></div>
      <span className="label" style={{ background: noteColor }}>
        {note}
      </span>
    </div>
  );
}

export default Fret;
