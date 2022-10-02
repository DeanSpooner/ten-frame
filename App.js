import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import appStyles from "./App.styles";
import TenFrame from "./screens/TenFrame/TenFrame";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <LinearGradient colors={["#045d1a", "#11ac56"]} style={appStyles.container}>
      <Header />
      <TenFrame />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}
