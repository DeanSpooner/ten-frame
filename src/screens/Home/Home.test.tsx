import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import Home from "./Home";

describe("<Home />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Home
          setScreen={function (value: React.SetStateAction<string>): void {
            throw new Error("Function not implemented.");
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("contains 3 direct child components ", () => {
    const tree = renderer
      .create(
        <Home
          setScreen={function (value: React.SetStateAction<string>): void {
            throw new Error("Function not implemented.");
          }}
        />
      )
      .toJSON() as ReactTestRendererJSON[];
    expect(tree?.length).toBe(3);
  });
});
