import { useState } from "react";

import { Text, View, StyleSheet, TextInput, TouchableHighlight } from "react-native";

interface Props {
  handleCreateTask: (text: string) => void
};

export function Form({ handleCreateTask }: Props) {
  const [text, setText] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={text}
        onChangeText={setText}
      />

      <TouchableHighlight
        onPress={() => { handleCreateTask(text), setText('') }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: -24
  },

  input: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#262626',
    paddingLeft: 16,
    color: '#F2F2F2'
  },

  button: {
    backgroundColor: '#1E6F9F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    fontSize: 20
  }
})