import { Text, View } from "react-native";
import { styles } from "./styles";


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>friendz</Text>
      <Text style={styles.eventDate}>Invite all your friendz</Text>
    </View >
  )
}
