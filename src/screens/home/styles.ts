import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131016",
    flex: 1,
    padding: 24

  },
  eventName: {
    color: "#fdfcfe",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 48
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 7,
    marginBottom: 42,
    marginTop: 36

  },
  input: {
    backgroundColor: "#1f1e25",
    height: 48,
    borderRadius: 8,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    flex: 1
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#31CF67",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 24

  }
})