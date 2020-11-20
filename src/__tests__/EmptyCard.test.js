import React from "react";
import { render } from "../test-utils";
import EmptyCard from "../components/EmptyCard";

test("renders EmptyCard", () => {
  const { container } = render(<EmptyCard />);
  expect(container).toMatchSnapshot();
});
