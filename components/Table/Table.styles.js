import { StyleSheet } from "react-native";

export default tableStyles = StyleSheet.create({
  container: {
    width: 166,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cell: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 3,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    backgroundColor: "#f00",
    width: "90%",
    height: "90%",
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: "50%",
  },
});
