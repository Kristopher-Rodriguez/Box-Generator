import React, { useState } from "react";
import "./App.css";
import ColorSelector from "./components/ColorSelector";
import Box from "./components/Box";

function App() {
  const [boxColorArray, setBoxColorArray] = useState([]);

  return (
    <div className="App">
      <ColorSelector
        boxColorArray={boxColorArray}
        setBoxColorArray={setBoxColorArray}
      />
      <Box boxColorArray={boxColorArray} />
    </div>
  );
}

export default App;
