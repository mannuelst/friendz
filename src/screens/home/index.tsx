import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Friend } from "../../components/friend";
import { styles } from "./styles";


export function Home() {
  const [friends, setFriends] = useState<string[]>([])
  const [friendName, setFriendName] = useState("")
  const allFriends = ["Alberto", "John", "Lucas", "Silvia", "Manuel"]
  function handleAddFriends() {
    if (allFriends.includes(friendName)) {
      return Alert.alert("Adicionar", "Já existe um amigo com este nome")
    }
    setFriends(prevState => [...prevState, friendName])
    setFriendName("")

    // console.log("Você adicionou um amigo")
  }
  function handleRemoveFriend(name: string) {
    Alert.alert("Remover", `Quer remover ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Removido!")
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
    // console.log("Você removeu um amigo")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>friendz</Text>
      <Text style={styles.eventDate}>Convide todos os seus amigos</Text>
      <View style={styles.form}>

        <TextInput style={styles.input} placeholder="Nome do convidado"
          placeholderTextColor="#6b6b6b"
          onChangeText={setFriendName}
          value={friendName} />

        <TouchableOpacity style={styles.button} onPress={() => handleAddFriends()}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={friends}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Friend
            name={item}
            onRemove={() => handleRemoveFriend(item)}
          />

        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Não convidou nenhum amigo ainda? Adicione um amigo.
          </Text>

        )}
      />

      {/* <ScrollView
        showsVerticalScrollIndicator={false}>

        {allFriends.map(friend =>

          <Friend key={friend}
            name={friend}
            onRemove={() => handleRemoveFriend("")} />
        )}
      </ScrollView> */}
    </View >
  )
}
