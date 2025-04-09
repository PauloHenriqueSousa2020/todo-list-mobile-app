
import { View, StatusBar } from 'react-native';

import { Home } from '@/screens/Home';

export default function App() {
  return (
    <View>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <Home />
    </View>
  );
}