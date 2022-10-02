import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  outerContainer: {
    flexDirection: "column",
    width: "100%",
    position: "absolute",
    top: 0,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    paddingBottom: 5,
    flexWrap: "wrap",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    backgroundColor: "green",
    position: "absolute",
    top: 0,
    alignItems: "flex-end",
    alignContent: "flex-end",
    paddingBottom: 5,
    flexWrap: "wrap",
  },
  title: {
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
  },
  menuItemContainer: {
    zIndex: 102,
    elevation: 102,
    backgroundColor: "rgba(0,255,0,0.5)",
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  menuItem: {
    borderRadius: 12,
    color: "#fff",
    padding: 16,
    fontSize: 30,
    textAlign: "center",
    justifyContent: "center",
  },
});

export default headerStyles;
