import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';


export default function App() {
  const [goalText, setGoalText] = useState('')
  const [goals, setGoals] = useState([])

  function goalInputHandler(enteredText) {
   setGoalText(enteredText)
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [
      ...currentGoals,
       {text: goalText, key: Math.random().toString()},
      ])
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your daily todo list"
          onChangeText={goalInputHandler}
        />
        <Button title="Add todo" onPress={addGoalHandler} />
      </View>
      <View style={styles.todoContainer}>
        <FlatList data={goals} renderItem={itemData => {
          return (
            <View style={styles.goalItem} >
               <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>            
          )
        }} 
         />      
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
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e8acc',
  },
  goalText: {
    color: 'white',
  }
});
