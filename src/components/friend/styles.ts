import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginBottom: 10,


  },
  name: {
    color: "#fff",
    flex: 1,
    fontSize: 16,
    padding: 16,


  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#e23c44",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 24

  }

})