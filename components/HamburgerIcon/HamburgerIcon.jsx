import React from "react";
import { TouchableOpacity, View } from "react-native";
import HamburgerIconStyles from "./HamburgerIcon.styles";

const HamburgerIcon = ({ setMenuDown, menuDown }) => {
  return (
    <TouchableOpacity
      style={HamburgerIconStyles.container}
      onPress={() => {
        setMenuDown(!menuDown);
      }}
    >
      {!menuDown && (
        <>
          <View style={HamburgerIconStyles.line} />
          <View style={HamburgerIconStyles.line} />
          <View style={HamburgerIconStyles.line} />
        </>
      )}
      {menuDown && (
        <>
          <View style={HamburgerIconStyles.crossLine} />
          <View
            style={[
              HamburgerIconStyles.crossLine,
              { transform: [{ translateY: -12 }, { rotate: "135deg" }] },
            ]}
          />
        </>
      )}
    </TouchableOpacity>
  );
};

export default HamburgerIcon;
