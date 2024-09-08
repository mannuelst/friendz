import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export function Home() {
  function handleAddFriends() {
    console.log("Você adicionou um amigo")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>friendz</Text>
      <Text style={styles.eventDate}>Convide todos os seus amigos</Text>

      <TextInput style={styles.input} placeholder="Nome do convidado"
        placeholderTextColor="#6b6b6b" />

      <TouchableOpacity style={styles.button} onPress={handleAddFriends}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View >
  )
}
