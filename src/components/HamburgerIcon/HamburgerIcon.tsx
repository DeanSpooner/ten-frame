import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import HamburgerIconStyles from "./HamburgerIcon.styles";

interface HamburgerIconProps {
  setMenuDown: React.Dispatch<React.SetStateAction<boolean>>;
  menuDown: boolean;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  setMenuDown,
  menuDown,
}) => {
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
