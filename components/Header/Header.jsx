import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import headerStyles from "./Header.styles";

const Header = ({ setScreen, setMenuDown, menuDown }) => {
  const screens = [
    { name: "home", text: "Home" },
    { name: "tenframe", text: "Ten Frame - Input" },
    { name: "tenframetouch", text: "Ten Frame - Touch" },
    { name: "about", text: "About" },
  ];

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
            {screens.map((screen) => (
              <TouchableOpacity
                onPress={() => {
                  setScreen(screen.name);
                  setMenuDown(!menuDown);
                }}
                style={headerStyles.menuItemContainer}
                key={screen.name}
              >
                <Text style={headerStyles.menuItem}>{screen.text}</Text>
              </TouchableOpacity>
            ))}
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
