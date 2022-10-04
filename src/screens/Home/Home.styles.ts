import { Dimensions, StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  menuItemContainer: {
    zIndex: 102,
    elevation: 102,
    backgroundColor: "rgba(0,255,205,0.4)",
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  menuItem: {
    borderRadius: 12,
    color: "#fff",
    padding: 16,
    fontSize: Dimensions.get("window").width / 18,
    textAlign: "center",
    justifyContent: "center",
  },
});

export default homeStyles;
