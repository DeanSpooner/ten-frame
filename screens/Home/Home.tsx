import React from "react";
import { Text } from "react-native";
import homeStyles from "./Home.styles";

const Home: React.FC<{}> = () => {
  return (
    <>
      <Text style={homeStyles.text}>Welcome to the Ten Frame app!</Text>
    </>
  );
};

export default Home;
