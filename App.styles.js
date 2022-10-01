import { StyleSheet } from "react-native";

export default appStyles = StyleSheet.create({
  container: {
    flex: 1,
    background: "#045d1a",
    alignItems: "center",
    justifyContent: "center",
  },
  cell: {
    width: "100px",
    height: "100px",
  },
  title: {
    color: "#fff",
    fontSize: 72,
    marginVertical: 40,
    textAlign: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
  textInput: {
    height: 60,
    margin: 12,
    width: "100%",
    padding: 10,
    fontSize: 40,
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "#fff",
    width: "25%",
    height: 60,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
