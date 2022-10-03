import React from "react";
import renderer from "react-test-renderer";
import TenFrameTouch from "./TenFrameTouch";

describe("<TenFrameTouch />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TenFrameTouch />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("contains 3 direct child components", () => {
    const tree = renderer.create(<TenFrameTouch />).toJSON();
    expect(tree?.length).toBe(3);
  });
});
