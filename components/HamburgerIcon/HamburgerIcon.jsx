import React from "react";
import { View } from "react-native";
import HamburgerIconStyles from "./HamburgerIcon.styles";

const HamburgerIcon = () => {
  return (
    <View style={HamburgerIconStyles.container}>
      <View style={HamburgerIconStyles.line} />
      <View style={HamburgerIconStyles.line} />
      <View style={HamburgerIconStyles.line} />
    </View>
  );
};

export default HamburgerIcon;
