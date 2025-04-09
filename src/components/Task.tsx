import { Image, Text, View, TouchableHighlight, StyleSheet, Alert } from "react-native";

interface Props {
  task: {
    id: number;
    text: string;
    completed: boolean;
  },
  handleCompleteTask: (task: { id: number, text: string, completed: boolean }) => void;
  handleRemoveTask: (id: number) => void;
}
export function Task({ task, handleCompleteTask, handleRemoveTask }: Props) {

  const handleAlertRemove = () =>
    Alert.alert('Deletar task', `Deseja excluir a task: ${task.text}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      { text: 'Sim', onPress: () => handleRemoveTask(task.id) },
    ]);

  const handleAlertComplete = () =>
    Alert.alert(task.completed ? 'Desmarcar task' : 'Completar task', `Deseja ${task.completed ? 'desmarcar' : 'concluir'} a task: ${task.text}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      { text: 'Sim', onPress: () => handleCompleteTask({ ...task, completed: !task.completed }) },
    ]);

  return (
    <View style={styles.taskContainer}>
      <TouchableHighlight
        style={styles.taskButtonContent}
        onPress={handleAlertComplete}
      >
        <View style={task.completed ? styles.checkedTaskButton : styles.checkTaskButton}>
          {task.completed && (
            <Image
              source={require('../assets/checked.png')}
              style={{ width: 7, height: 5 }}
            />
          )}
        </View>
      </TouchableHighlight>

      <Text style={task.completed ? styles.completedTask : styles.task}>{task.text}</Text>

      <TouchableHighlight
        onPress={handleAlertRemove}
        style={styles.removeTaskButton}
      >
        <Image
          source={require('../assets/remove.png')}
          style={{ width: 12, height: 14 }}
        />
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: "#262626",
    borderColor: '#333333',
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12
  },

  taskButtonContent: {
    backgroundColor: 'transparent',
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  checkedTaskButton: {
    width: 16,
    height: 16,
    backgroundColor: '#5E60CE',
    borderRadius: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  checkTaskButton: {
    width: 16,
    height: 16,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderRadius: 999,
  },

  task: {
    flexShrink: 1,
    color: '#F2F2F2'
  },

  completedTask: {
    color: "#808080",
    textDecorationLine: 'line-through'
  },

  removeTaskButton: {
    marginLeft: 'auto',
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

})