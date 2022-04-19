import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Head from "./header.js";
import Mainbody from "./mainbody.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Head />
      <Mainbody />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
