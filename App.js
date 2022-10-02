import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import appStyles from "./App.styles";
import TenFrame from "./screens/TenFrame/TenFrame";

export default function App() {
  return (
    <LinearGradient colors={["#045d1a", "#11ac56"]} style={appStyles.container}>
      <TenFrame />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}
