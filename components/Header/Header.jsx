import React from "react";
import { View, Text } from "react-native";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import headerStyles from "./Header.styles";

const Header = () => {
  return (
    <View style={headerStyles.container}>
      <HamburgerIcon />
      <Text style={headerStyles.title}>Ten Frame</Text>
      <View style={{ flex: 1, margin: 10 }} />
    </View>
  );
};

export default Header;
