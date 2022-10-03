import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import GameTable from "./GameTable";

describe("<GameTable />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<GameTable counter={0} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 10 children", () => {
    const tree = renderer
      .create(<GameTable counter={0} />)
      .toJSON() as ReactTestRendererJSON[];
    //@ts-ignore
    expect(tree?.children.length).toBe(10);
  });
});
