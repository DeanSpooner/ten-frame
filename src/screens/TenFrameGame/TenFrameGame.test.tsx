import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import TenFrameGame from "./TenFrameGame";

describe("<TenFrameGame />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TenFrameGame />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 1 child", () => {
    const tree = renderer
      .create(<TenFrameGame />)
      .toJSON() as ReactTestRendererJSON[];
    //@ts-ignore
    expect(tree?.children.length).toBe(1);
  });
});
