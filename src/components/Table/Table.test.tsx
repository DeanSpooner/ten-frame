import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import Table from "./Table";

describe("<Table />", () => {
  let tree: ReactTestRendererJSON[];
  beforeEach(() => {
    tree = renderer
      .create(<Table counter={0} />)
      .toJSON() as ReactTestRendererJSON[];
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it("has 10 children", () => {
    //@ts-ignore
    expect(tree?.children.length).toBe(10);
  });
});
