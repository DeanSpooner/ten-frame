import { StyleSheet } from "react-native";

export default hamburgerIconStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 10,
    flex: 1,
    width: 30,
  },
  line: {
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 8,
    width: 35,
  },
  crossLine: {
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 8,
    width: 35,
    transform: [{ rotate: "45deg" }],
  },
});
