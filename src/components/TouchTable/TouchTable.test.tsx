import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import TouchTable from "./TouchTable";

describe("<Table />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TouchTable
          countersTouched={0}
          setCountersTouched={function (
            value: React.SetStateAction<number>
          ): void {
            throw new Error("Function not implemented.");
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 10 children", () => {
    const tree = renderer
      .create(
        <TouchTable
          countersTouched={0}
          setCountersTouched={function (
            value: React.SetStateAction<number>
          ): void {
            throw new Error("Function not implemented.");
          }}
        />
      )
      .toJSON() as ReactTestRendererJSON[];
    //@ts-ignore
    expect(tree?.children.length).toBe(10);
  });
});
