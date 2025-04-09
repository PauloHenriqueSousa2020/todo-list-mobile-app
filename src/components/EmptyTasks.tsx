import { Image, View, Text, StyleSheet } from "react-native";

export function EmptyTasks() {
  return (
    <View style={styles.contet}>
      <Image
        source={require('../assets/clipboard.png')}
        style={{ width: 56, height: 56 }}
      />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subTitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contet: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginTop: 20,
    color: '#808080',
    fontSize: 16,
    fontWeight: 700
  },
  subTitle: {
    color: '#808080'
  }
});