import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import Home from "./Home";

describe("<Home />", () => {
  const tree = renderer
    .create(
      <Home
        setScreen={function (value: React.SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        }}
      />
    )
    .toJSON() as ReactTestRendererJSON[];

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it("contains 3 direct child components ", () => {
    expect(tree?.length).toBe(3);
  });
});
