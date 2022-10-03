import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import HamburgerIcon from "./HamburgerIcon";

describe("<HamburgerIcon />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <HamburgerIcon
          setMenuDown={function (value: React.SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          }}
          menuDown={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 3 children", () => {
    const tree = renderer
      .create(
        <HamburgerIcon
          setMenuDown={function (value: React.SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          }}
          menuDown={false}
        />
      )
      .toJSON() as ReactTestRendererJSON[];
    //@ts-ignore
    expect(tree?.children.length).toBe(3);
  });
});
