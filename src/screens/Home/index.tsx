import { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";

import { EmptyTasks, Form, Header, Task, TaskSummary } from "components";

export function Home() {
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = (text: string) => {
    if (text === '') return
    setTasks((prev) => [...prev, { id: prev.length + 1, text }]);
  }

  const handleRemoveTask = (id: number) => {
    setTasks((prev) => prev.filter(item => item.id !== id));
  }

  const handleCompleteTask = (task: { id: number, text: string, completed: boolean }) => {
    setTasks((prev => [...prev.filter(taskItem => taskItem.id !== task.id), task]));
  }

  const completedTasks = tasks.filter(task => !!task.completed).length;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Form handleCreateTask={handleCreateTask} />
        <TaskSummary created={tasks.length} completed={completedTasks} />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            <Task
              task={item}
              handleCompleteTask={handleCompleteTask}
              handleRemoveTask={handleRemoveTask}
            />
          }
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyTasks />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#1A1A1A'
  },

  content: {
    flex: 1,
    paddingHorizontal: 24
  }
})