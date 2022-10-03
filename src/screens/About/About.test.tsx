import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import About from "./About";

describe("<Home />", () => {
  const tree = renderer.create(<About />).toJSON() as ReactTestRendererJSON[];

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it("has 1 child ", () => {
    expect(tree?.length).toBe(3);
  });
});
