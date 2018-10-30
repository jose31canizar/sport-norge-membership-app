import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  qr_code_container: {
    flex: 1,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5
  },
  section_buttons: {
    flex: 1
  },
  section_button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1
  }
});
