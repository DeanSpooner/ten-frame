import React from "react";
import { Image, Text } from "react-native";
import aboutStyles from "./About.styles";

const About: React.FC<{}> = () => {
  return (
    <>
      <Image
        source={require("../../assets/images/tflogo.png")}
        style={{ width: 200, height: 200, marginBottom: 20 }}
      ></Image>
      <Text style={aboutStyles.text}>Ten Frame, made by Dean Spooner!</Text>
      <Text style={aboutStyles.text}>Built September/October 2022.</Text>
    </>
  );
};

export default About;
