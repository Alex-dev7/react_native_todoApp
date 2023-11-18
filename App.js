import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  function goalInputHandler() {}

  function addGoalHandler() {}


  return (
    <View style={styles.appContainer} >

      <View style={styles.inputContainer}> 
        <TextInput style={styles.textInput} placeholder='Your daily todo list' />
        <Button title='Add todo'  />
      </View>
      <View style={styles.todoContainer}>
        <Text>List of To Do</Text>
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 5,
    padding: 8,
  },
  todoContainer: {
    flex: 5,
  }
});
