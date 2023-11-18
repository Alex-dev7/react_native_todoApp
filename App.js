import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff875f',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  text: {
    color: 'white',
  }
});
