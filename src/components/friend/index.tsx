import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
type FriendProps = {
  name: string,
  onRemove: () => void

}
export function Friend({ name, onRemove }: Readonly<FriendProps>) {
  return (
    <View style={styles.container}>


      <Text style={styles.name}>
        {name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>

  )
}