import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import Home from "./Home";

describe("<Home />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 1 child ", () => {
    const tree = renderer.create(<Home />).toJSON() as ReactTestRendererJSON[];
    //@ts-ignore
    expect(tree?.children.length).toBe(1);
  });
});
