import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import Counter from './src/components/Counter';
import Hero from './src/components/Hero';

export default function App() {
  return (
    <View style={styles.container}>
      <Hero />
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffaa00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
