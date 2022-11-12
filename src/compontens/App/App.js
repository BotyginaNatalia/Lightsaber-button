import { useState } from "react";
import Main from "../Main/Main";

function App() {
  const [color, setColor] = useState(false);
  function changeColor() {
    setColor((color) => !color);
  }

  return (
    <div className="app">
      <div
        style={{
          backgroundColor: color ? "white" : "",
          color: color ? "black" : "",
        }}
      >
        <Main changeColor={changeColor} />
      </div>
    </div>
  );
}

export default App;
