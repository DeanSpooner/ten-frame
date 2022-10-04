import React from "react";
import { Image, Text, View } from "react-native";
import globalStyles from "../../../Global.styles";

const About: React.FC<{}> = () => {
  return (
    <View style={globalStyles.screenContainer}>
      <Image
        source={require("../../assets/images/tflogo.png")}
        style={{ width: 200, height: 200, margin: 20 }}
      ></Image>
      <Text style={globalStyles.text}>Ten Frame, made by Dean Spooner!</Text>
      <Text style={globalStyles.text}>Built September/October 2022.</Text>
    </View>
  );
};

export default About;
