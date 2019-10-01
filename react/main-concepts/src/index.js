import React from "react";
import ReactDOM from "react-dom";

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: "Muhammad",
  lastName: "Usman"
};

const element = <p>Hello, {formatName(user)}</p>;

ReactDOM.render(element, document.getElementById("root"));
