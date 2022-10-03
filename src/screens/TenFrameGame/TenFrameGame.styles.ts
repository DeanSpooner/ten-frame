import { StyleSheet } from "react-native";

const tenFrameGameStyles = StyleSheet.create({
  score: {
    color: "#ffe800",
    fontSize: 40,
    marginBottom: 50,
    textAlign: "center",
  },
  time: {
    color: "#00e8ff",
    flex: 1,
    fontSize: 40,
    marginBottom: 50,
    textAlign: "center",
  },
  timeContainer: {
    borderColor: "#00e8ff",
    borderRadius: 50,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 15,
  },
  buttonsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    maxWidth: 375,
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 50,
    margin: 5,
    height: 65,
    width: 65,
  },
  buttonText: {
    fontSize: 48,
    textAlign: "center",
  },
  answerMessage: {
    fontSize: 36,
    textAlign: "center",
    marginHorizontal: 15,
    position: "absolute",
    bottom: 60,
    fontWeight: "bold",
  },
  resetButtonContainer: {
    backgroundColor: "#ff7964",
    border: "#000",
    borderRadius: 75,
    borderWidth: 3,
    height: 150,
    justifyContent: "center",
    width: 150,
  },
  startResetButton: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
  },
  startButtonContainer: {
    backgroundColor: "#02d1fc",
    border: "#000",
    borderRadius: 75,
    borderWidth: 3,
    height: 150,
    justifyContent: "center",
    width: 150,
  },
});

export default tenFrameGameStyles;
