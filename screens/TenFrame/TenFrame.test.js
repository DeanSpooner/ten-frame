import React from "react";
import renderer from "react-test-renderer";
import TenFrame from "./TenFrame";

describe("<TenFrame />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TenFrame />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("contains 4 direct child components", () => {
    const tree = renderer.create(<TenFrame />).toJSON();
    expect(tree.length).toBe(4);
  });
});
