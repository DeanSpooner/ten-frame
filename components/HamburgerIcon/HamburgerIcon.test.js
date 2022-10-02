import React from "react";
import renderer from "react-test-renderer";
import HamburgerIcon from "./HamburgerIcon";

describe("<HamburgerIcon />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HamburgerIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 3 children", () => {
    const tree = renderer.create(<HamburgerIcon />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});
