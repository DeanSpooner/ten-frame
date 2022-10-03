import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { screens } from "../../data/screen";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import headerStyles from "./Header.styles";

interface HeaderProps {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setMenuDown: React.Dispatch<React.SetStateAction<boolean>>;
  menuDown: boolean;
}

const Header: React.FC<HeaderProps> = ({
  setScreen,
  setMenuDown,
  menuDown,
}) => {
  return (
    <>
      <View
        style={[
          headerStyles.outerContainer,
          //@ts-ignore
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
            //@ts-ignore
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
