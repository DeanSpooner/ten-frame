import React from "react";
import renderer from "react-test-renderer";
import TouchTable from "./TouchTable";

describe("<Table />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TouchTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 10 children", () => {
    const tree = renderer.create(<TouchTable />).toJSON();
    expect(tree.children.length).toBe(10);
  });
});
