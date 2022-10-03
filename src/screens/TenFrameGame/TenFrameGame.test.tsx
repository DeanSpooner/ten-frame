import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import TenFrameGame from "./TenFrameGame";

describe("<TenFrameGame />", () => {
  let tree: ReactTestRendererJSON[];
  beforeEach(() => {
    tree = renderer
      .create(<TenFrameGame />)
      .toJSON() as ReactTestRendererJSON[];
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it("has 1 child", () => {
    //@ts-ignore
    expect(tree?.children.length).toBe(1);
  });
});
