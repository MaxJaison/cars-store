import React from "react";
import { render } from "../test-utils";
import Filters from "../components/Filters";
import { colors, manufacturers } from "../mocks";

test("renders Filters", () => {
  const { container } = render(
    <Filters colors={colors} manufacturers={manufacturers} />,
    {}
  );
  expect(container).toMatchSnapshot();
});
