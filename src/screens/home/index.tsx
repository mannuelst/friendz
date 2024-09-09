import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Friend } from "../../components/friend";
import { styles } from "./styles";


export function Home() {
  const allFriends = ["Alberto", "John", "Lucas", "Silvia", "Manuel"]
  function handleAddFriends() {

    // console.log("Você adicionou um amigo")
  }
  function handleRemoveFriend(name: string) {
    console.log("Você removeu um amigo")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>friendz</Text>
      <Text style={styles.eventDate}>Convide todos os seus amigos</Text>
      <View style={styles.form}>

        <TextInput style={styles.input} placeholder="Nome do convidado"
          placeholderTextColor="#6b6b6b" />

        <TouchableOpacity style={styles.button} onPress={handleAddFriends}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={allFriends}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Friend
            name={item}
            onRemove={() => handleRemoveFriend("")}
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
