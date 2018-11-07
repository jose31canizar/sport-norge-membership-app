import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
  qr_code_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 5,
    paddingRight: 25,
    borderRadius: 15
  },
  caption: {
    justifyContent: "flex-start",
    padding: 10
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5
  },
  member_services: {
    flex: 1
  },
  member_service: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  member_service_name: {
    fontSize: 21,
    color: "white",
    position: "absolute"
  },
  member_service_image: {
    width: "100%"
  },
  featured_offers: {
    paddingBottom: 20,
    zIndex: -1
  },
  featured_offer: {
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  featured_offer_image: {
    width: "100%",
    resizeMode: "cover",
    height: 120
  },
  featured_offer_caption: {
    padding: 20,
    justifyContent: "center"
  },
  h1: {
    fontSize: 21
  },
  h2: {
    fontSize: 19
  },
  h3: { fontSize: 18 },

  shadow: {
    borderWidth: 1,
    borderColor: "rgba(222, 224, 226, 0.5)",
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "rgba(222, 224, 226, 0.95)",
    shadowRadius: 9,
    shadowOpacity: 1.0
  }
});
