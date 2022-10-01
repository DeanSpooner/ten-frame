import { StyleSheet } from "react-native";

export default tableStyles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cell: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 3,
    height: 72,
    width: 72,
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    width: 65,
    height: 65,
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 50,
    overflow: "hidden",
  },
});
