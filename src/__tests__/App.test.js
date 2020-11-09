import React from "react";
import { render } from "../test-utils";
import App from "../App";

test("renders App", () => {
  const { container } = render(<App />, {});
  expect(container).toMatchSnapshot();
});
