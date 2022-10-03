import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import TenFrameTouch from "./TenFrameTouch";

describe("<TenFrameTouch />", () => {
  const tree = renderer
    .create(<TenFrameTouch />)
    .toJSON() as ReactTestRendererJSON[];

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it("contains 3 direct child components", () => {
    expect(tree?.length).toBe(3);
  });
});
