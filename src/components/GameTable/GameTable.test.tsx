import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import GameTable from "./GameTable";

describe("<GameTable />", () => {
  let tree: ReactTestRendererJSON[];
  beforeEach(() => {
    tree = renderer
      .create(<GameTable counter={0} />)
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
