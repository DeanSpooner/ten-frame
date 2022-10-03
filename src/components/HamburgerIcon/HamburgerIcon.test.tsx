import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import HamburgerIcon from "./HamburgerIcon";

describe("<HamburgerIcon />", () => {
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

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it("has 3 children", () => {
    //@ts-ignore
    expect(tree?.children.length).toBe(3);
  });
});
