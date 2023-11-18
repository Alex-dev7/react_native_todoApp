import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer} >

      <View style={styles.inputContainer}> 
        <TextInput style={styles.textInput} placeholder='Your daily todo list' />
        <Button title='Add todo' />
      </View>
      <View>
        <Text>List of To Do</Text>
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 5,
    padding: 8,
  }
});
