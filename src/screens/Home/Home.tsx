import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { screens } from "../../data/screen";
import homeStyles from "./Home.styles";

interface HomeProps {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({ setScreen }) => {
  return (
    <>
      <Text style={homeStyles.text}>Welcome to the Ten Frame app!</Text>
      <Text style={[homeStyles.text, { fontStyle: "italic" }]}>
        Choose a mode to get started:
      </Text>
      <View>
        {screens.map(
          (screen) =>
            screen.name !== "home" && (
              <TouchableOpacity
                onPress={() => setScreen(screen.name)}
                style={homeStyles.menuItemContainer}
                key={screen.name}
              >
                <Text style={homeStyles.menuItem}>{screen.text}</Text>
              </TouchableOpacity>
            )
        )}
      </View>
    </>
  );
};

export default Home;
