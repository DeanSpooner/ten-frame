import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import About from "./About";

describe("<About />", () => {
  const tree = renderer.create(<About />).toJSON() as ReactTestRendererJSON[];

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it("has 3 children ", () => {
    //@ts-ignore
    expect(tree?.children.length).toBe(3);
  });
});
