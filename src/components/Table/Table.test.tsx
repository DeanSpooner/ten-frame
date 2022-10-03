import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import Table from "./Table";

describe("<Table />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Table counter={0} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 10 children", () => {
    const tree = renderer
      .create(<Table counter={0} />)
      .toJSON() as ReactTestRendererJSON[];
    //@ts-ignore
    expect(tree?.children.length).toBe(10);
  });
});
