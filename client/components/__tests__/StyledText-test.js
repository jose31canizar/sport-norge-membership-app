import "react-native";
import React from "react";
import { FuturaText } from "../styled-text";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<FuturaText>Snapshot test!</FuturaText>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
