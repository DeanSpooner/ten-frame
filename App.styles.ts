import { Dimensions, StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    background: "#045d1a",
    alignItems: "center",
    justifyContent: "center",
  },
  screenContainer: {
    position: "absolute",
    top: 100,
    height: Dimensions.get("window").height - 100,
  },
});

export default appStyles;
