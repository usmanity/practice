import { unmountComponentAtNode } from "react-dom";
import { arrowFunctionExpression } from "@babel/types";
import { italic } from "ansi-colors";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders one component", () => {
  act(() => {
    render;
  });
});
