import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";


export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>friendz</Text>
      <Text style={styles.eventDate}>Invite all your friendz</Text>

      <TextInput style={styles.input} />
    </View >
  )
}
