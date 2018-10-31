import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  qr_code_container: {
    flex: 1,
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
    flex: 1,
    padding: 10,
    backgroundColor: "#e5e5e5"
  },
  section_button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
    marginVertical: 5,
    backgroundColor: "white",
    justifyContent: 'center',
    flexDirection: 'row'
  },
  section_button_name: {
    fontSize: 21
  },
  featured_offers: {
    paddingVertical: 40,
    zIndex: -1,
    flex: 1
  },
  featured_offer: {
    flex: 1,
    justifyContent: "center"
  },
  featured_offer_image: {
    flex: 1,
    height: 200
  },
  h1: {
    fontSize: 21
  },
  h3: { fontSize: 18 },
  caption: {
    justifyContent: "flex-start",
    padding: 60,
    paddingLeft: 110,
    flex: 1,
    width: "100%"
  }
});
