import { render } from "../test-utils";
import React from "react";
import CarPage from "../components/CarPage";

test("renders CarPage", () => {
  const { container } = render(<CarPage />, {});
  expect(container).toMatchSnapshot();
});
