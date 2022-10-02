import React, { useState } from "react";
import { View, Text } from "react-native";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import headerStyles from "./Header.styles";

const Header = () => {
  const [menuDown, setMenuDown] = useState(false);

  return (
    <View
      style={[
        headerStyles.container,
        menuDown ? { height: 600, zIndex: 100 } : "",
      ]}
    >
      <HamburgerIcon setMenuDown={setMenuDown} menuDown={menuDown} />
      <Text style={headerStyles.title}>Ten Frame</Text>
      <View style={{ flex: 1, margin: 10 }} />
    </View>
  );
};

export default Header;
