import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import About from "./About";

describe("<Home />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 1 child ", () => {
    const tree = renderer.create(<About />).toJSON() as ReactTestRendererJSON[];
    expect(tree?.length).toBe(3);
  });
});
