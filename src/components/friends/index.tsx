import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Friends() {
  return (
    <View style={styles.container}>


      <Text style={styles.name}>
        Friend convidado</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>

  )
}