import { render } from "../test-utils";
import React from "react";
import Home from "../Components/Home";

test("renders Home", () => {
  const { container } = render(<Home />, {});
  expect(container).toMatchSnapshot();
});
