import { render } from "../test-utils";
import React from "react";
import CarsList from "../Components/CarsList";

test("renders CarsPage", () => {
  const { container } = render(<CarsList />, {});
  expect(container).toMatchSnapshot();
});
