import React, { useState } from "react";
import "./App.css";
import Cleanup from "./Cleanup";

function App() {
  const [display, setDisplay] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setDisplay(!display)}>버튼</button>
      {display === true && <Cleanup />}
    </div>
  );
}

export default App;
