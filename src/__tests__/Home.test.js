import { render } from "../test-utils";
import React from "react";
import Home from "../components/Home";

test("renders Home", () => {
  const { container } = render(<Home />, {});
  expect(container).toMatchSnapshot();
});
