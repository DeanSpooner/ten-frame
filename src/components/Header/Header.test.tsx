import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import Header from "./Header";

describe("<Header />", () => {
  const tree = renderer
    .create(
      <Header
        setScreen={function (value: React.SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        }}
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

  it("has 1 child", () => {
    //@ts-ignore
    expect(tree?.children.length).toBe(1);
  });
});
