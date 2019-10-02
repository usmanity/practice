import React from "react";
import ReactDOM from "react-dom";

function FancyBorder(props) {
  return (
    <div className="FancyBorder">
      <div className="left">
        <h1>Left</h1>
        {props.left}
      </div>
      <div className="right">
        <h1>right</h1>
        {props.right}
      </div>
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder
      left={<h2>Props children passed in here</h2>}
      right={<strong>Another tag too</strong>}
    ></FancyBorder>
  );
}

ReactDOM.render(<WelcomeDialog />, document.getElementById("root"));
