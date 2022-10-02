import React from "react";
import renderer from "react-test-renderer";
import TenFrameGame from "./TenFrameGame";

describe("<TenFrameGame />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TenFrameGame />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("contains 4 direct child components", () => {
    const tree = renderer.create(<TenFrameGame />).toJSON();
    expect(tree.length).toBe(4);
  });
});
