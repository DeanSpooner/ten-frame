import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import appStyles from "./App.styles";
import TenFrame from "./screens/TenFrame/TenFrame";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [menuDown, setMenuDown] = useState(false);

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
      {screen === "about" && !menuDown && <About />}
      <StatusBar style="auto" />
    </LinearGradient>
  );
}
