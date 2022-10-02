import { StyleSheet } from "react-native";

export default headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    backgroundColor: "green",
    position: "absolute",
    top: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 5,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
  },
});
