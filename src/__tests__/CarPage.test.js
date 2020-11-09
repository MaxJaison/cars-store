import { render } from "../test-utils";
import React from "react";
import CarPage from "../Components/CarPage";

test("renders CarPage", () => {
  const { container } = render(<CarPage />, {});
  expect(container).toMatchSnapshot();
});
