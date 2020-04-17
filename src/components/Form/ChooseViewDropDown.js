import React from "react";

function ChooseViewDropDown(view, setView) {
  const items = [
    {
      label: "Classic view - Right hand",
      value: "classic-view-right-hand",
    },
    { label: "Mirror view - Right hand", value: "mirror-view-right-hand" },
    // { label: "Classic view - Left hand", value: "classic-view-left-hand" },
    // { label: "Mirror view - Left hand", value: "mirror-view-left-hand" },
  ];

  return (
    <select onChange={(e) => setView(e.currentTarget.value)}>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default ChooseViewDropDown;
