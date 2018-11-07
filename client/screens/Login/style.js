import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  login_button: {
    width: "100%",
    backgroundColor: "transparent",
    marginVertical: 10,
    borderRadius: 40,
    height: 55,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center"
  },
  input: {
    height: 50,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "white",
    fontSize: 14,
    fontFamily: "Futura",
    color: "white"
  },
  login_name: {
    fontSize: 15,
    letterSpacing: 1
  },
  login_image: {
    width: "100%",
    height: 170
  },
  login_container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: "100%",
    backgroundColor: "black",
    alignItems: "center"
  },
  logo_image: {
    margin: "auto"
  },
  h1: {
    fontSize: 24,
    color: "white",
    textAlign: "center"
  },
  h5: {
    fontSize: 16,
    color: "white",
    textAlign: "center"
  }
});
