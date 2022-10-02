import React from "react";
import renderer from "react-test-renderer";
import Header from "./Header";

describe("<Header />", () => {
  it("renders correctly", () => {
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
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 1 child", () => {
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
      .toJSON();
    expect(tree.children.length).toBe(1);
  });
});
