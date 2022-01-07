import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { Jbutton } from "../lib/jdesign";

ReactDOM.render(
  <div className="win">
    <h1>Hello, Everyone!</h1>
    <Jbutton type="pink" onClick={() => alert("赢了")}>
      点一下
    </Jbutton>
  </div>,
  document.getElementById("root")
);
