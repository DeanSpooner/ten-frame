import { Dimensions, StyleSheet } from "react-native";

const tenFrameGameStyles = StyleSheet.create({
  score: {
    color: "#ffe800",
    fontSize: Dimensions.get("window").width / 12,
    marginBottom: 20,
    textAlign: "center",
  },
  time: {
    color: "#00e8ff",
    flex: 1,
    fontSize: Dimensions.get("window").width / 12,
    textAlign: "center",
  },
  timeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 100,
  },
  buttonsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 50,
    margin: 5,
    height: Dimensions.get("window").width * 0.17,
    width: "17%",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 48,
    textAlign: "center",
    justifyContent: "center",
  },
  answerMessage: {
    fontSize: Dimensions.get("window").width / 10,
    textAlign: "center",
    marginHorizontal: 15,
    fontWeight: "bold",
  },
  resetButtonContainer: {
    backgroundColor: "#ff7964",
    border: "#000",
    borderRadius: 500,
    borderWidth: 3,
    height: Dimensions.get("window").width / 2,
    justifyContent: "center",
    width: Dimensions.get("window").width / 2,
  },
  startResetButton: {
    color: "#000",
    fontSize: Dimensions.get("window").width / 12,
    textAlign: "center",
  },
  startButtonContainer: {
    backgroundColor: "#02d1fc",
    border: "#000",
    borderRadius: 500,
    borderWidth: 3,
    height: Dimensions.get("window").width / 2,
    justifyContent: "center",
    width: Dimensions.get("window").width / 2,
  },
});

export default tenFrameGameStyles;
