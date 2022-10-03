import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import TenFrame from "./TenFrame";

describe("<TenFrame />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TenFrame />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("contains 3 direct child components", () => {
    const tree = renderer
      .create(<TenFrame />)
      .toJSON() as ReactTestRendererJSON[];
    expect(tree?.length).toBe(3);
  });
});
