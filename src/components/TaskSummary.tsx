import { View, Text, StyleSheet } from "react-native";

interface Props {
  created: number;
  completed: number;
}

export function TaskSummary({ created, completed }: Props) {
  return (
    <View style={styles.listHeader}>
      <View style={styles.listHeaderContent}>
        <Text style={styles.createdText}>
          Criadas
        </Text>
        <View style={styles.badgeHeader}>
          <Text style={styles.badge}>{created}</Text>
        </View>
      </View>

      <View style={styles.listHeaderContent}>
        <Text style={styles.completedText}>
          Concluídas
        </Text>
        <View style={styles.badgeHeader}>
          <Text style={styles.badge}>{completed}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listHeader: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#333333',
    paddingBottom: 20,
    marginBottom: 48
  },

  listHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  createdText: {
    color: '#4EA8DE',
    fontWeight: 700
  },

  completedText: {
    color: '#8284FA',
    fontWeight: 700
  },

  badgeHeader: {
    backgroundColor: "#333333",
    width: 24,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  badge: {
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: 700
  }
})