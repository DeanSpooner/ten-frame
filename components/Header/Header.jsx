import React from "react";
import { View, Text } from "react-native";
import headerStyles from "./Header.styles";

const Header = () => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>Ten Frame</Text>
    </View>
  );
};

export default Header;
