import { StyleSheet } from "react-native";

export default touchTableStyles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 360,
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
    backgroundColor: "#f00",
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 50,
    overflow: "hidden",
  },
});
