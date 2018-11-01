import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  offer_container: {
    backgroundColor: "#e5e5e5",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  offer: {
    backgroundColor: "white",
    flexDirection: "row",
    flex: 1
  },
  offer_content: {
    padding: 10,
    flex: 1
  },
  image: {
    width: 100,
    height: 100
  },
  percentage: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: 5,
    color: "white"
  }
});
