import { Dimensions, StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  screenContainer: {
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
    minHeight: Dimensions.get("window").height - 100,
  },
  tenFrameContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cell: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 3,
    height: Dimensions.get("window").width * 0.19,
    width: "19%",
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    width: "90%",
    height: "90%",
    backgroundColor: "#f00",
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 100,
    overflow: "hidden",
  },
  text: {
    color: "#fff",
    fontSize: Dimensions.get("window").width / 18,
    textAlign: "center",
    margin: 15,
  },
});

export default globalStyles;
