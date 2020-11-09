import React from "react";
import { render } from "../test-utils";
import Filters from "../Components/Filters";
import { colors, manufactures } from "../mocks";

test("renders Filters", () => {
  const { container } = render(
    <Filters colors={colors} manufactures={manufactures} />,
    {}
  );
  expect(container).toMatchSnapshot();
});
