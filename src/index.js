import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Button name="click me" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
