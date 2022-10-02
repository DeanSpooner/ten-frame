import { StyleSheet } from "react-native";

const tenFrameGameStyles = StyleSheet.create({
  score: {
    color: "#ffe800",
    fontSize: 40,
    marginBottom: 50,
    textAlign: "center",
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
});

export default tenFrameGameStyles;
