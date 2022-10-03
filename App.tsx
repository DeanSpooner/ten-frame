import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./src/components/Header/Header";
import Home from "./src/screens/Home/Home";
import TenFrame from "./src/screens/TenFrame/TenFrame";
import TenFrameTouch from "./src/screens/TenFrameTouch/TenFrameTouch";
import About from "./src/screens/About/About";
import appStyles from "./App.styles";
import TenFrameGame from "./src/screens/TenFrameGame/TenFrameGame";

const App: React.FC<{}> = () => {
  const [screen, setScreen] = useState<string>("home");
  const [menuDown, setMenuDown] = useState<boolean>(false);

  return (
    <LinearGradient colors={["#045d1a", "#11ac56"]} style={appStyles.container}>
      <Header
        setScreen={setScreen}
        setMenuDown={setMenuDown}
        menuDown={menuDown}
      />
      {menuDown && (
        <TouchableOpacity
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 600,
            zIndex: 99,
            elevation: 99,
          }}
          onPress={() => setMenuDown(!menuDown)}
        ></TouchableOpacity>
      )}
      {screen === "home" && !menuDown && <Home />}
      {screen === "tenframe" && !menuDown && <TenFrame />}
      {screen === "tenframetouch" && !menuDown && <TenFrameTouch />}
      {screen === "tenframegame" && !menuDown && <TenFrameGame />}
      {screen === "about" && !menuDown && <About />}
      <StatusBar style="auto" />
    </LinearGradient>
  );
};

export default App;
