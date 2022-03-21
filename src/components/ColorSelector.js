import React, { useState } from "react";

const ColorSelector = (props) => {
  const { boxColorArray, setBoxColorArray } = props;

  const [color, setColor] = useState("");

  const createBox = (e) => {
    e.preventDefault();
    setBoxColorArray([...boxColorArray, color]);
  };

  return (
    <div>
      <h1>Box Generator</h1>
      <p>Type a color name to generate a box!</p>{" "}
      <form onSubmit={createBox}>
        <div>
          <label className="color">Color</label>
          <input
            type="text"
            name="color"
            className="input"
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ColorSelector;
