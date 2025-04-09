import { Image, View, StyleSheet } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 110, height: 32 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    height: 172
  }
})