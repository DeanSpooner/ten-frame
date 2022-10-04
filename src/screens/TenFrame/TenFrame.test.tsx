import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import TenFrame from "./TenFrame";

describe("<TenFrame />", () => {
  let tree: ReactTestRendererJSON[];
  beforeEach(() => {
    tree = renderer.create(<TenFrame />).toJSON() as ReactTestRendererJSON[];
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it("contains 3 direct child components", () => {
    //@ts-ignore
    expect(tree?.children.length).toBe(3);
  });
});
