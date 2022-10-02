import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import headerStyles from "./Header.styles";

const Header = ({ setScreen, setMenuDown, menuDown }) => {
  return (
    <>
      <View
        style={[
          headerStyles.outerContainer,
          menuDown ? { height: 600, zIndex: 100, elevation: 100 } : "",
        ]}
      >
        {menuDown && (
          <View style={{ zIndex: 101, elevation: 101 }}>
            <TouchableOpacity
              onPress={() => {
                setScreen("home");
                setMenuDown(!menuDown);
              }}
              style={headerStyles.menuItemContainer}
            >
              <Text style={headerStyles.menuItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setScreen("tenframe");
                setMenuDown(!menuDown);
              }}
              style={headerStyles.menuItemContainer}
            >
              <Text style={headerStyles.menuItem}>Ten Frame</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setScreen("about");
                setMenuDown(!menuDown);
              }}
              style={headerStyles.menuItemContainer}
            >
              <Text style={headerStyles.menuItem}>About</Text>
            </TouchableOpacity>
          </View>
        )}
        <View
          style={[
            headerStyles.container,
            menuDown ? { height: 600, zIndex: 100, elevation: 100 } : "",
          ]}
        >
          <HamburgerIcon setMenuDown={setMenuDown} menuDown={menuDown} />
          <Text style={headerStyles.title}>Ten Frame</Text>
          <View style={{ flex: 1, margin: 10 }} />
        </View>
      </View>
    </>
  );
};

export default Header;
