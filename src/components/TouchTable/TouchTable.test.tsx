import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import TouchTable from "./TouchTable";

describe("<TouchTable />", () => {
  let tree: ReactTestRendererJSON[];
  beforeAll(() => {
    tree = renderer
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
  });

  it("renders correctly", () => {
    const tree = renderer;
    expect(tree).toMatchSnapshot();
  });

  it("has 10 children", () => {
    //@ts-ignore
    expect(tree?.children.length).toBe(10);
  });
});
