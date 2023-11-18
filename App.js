import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [modalIsVisible, setModalIsVisibal] = useState(false)
  const [goals, setGoals] = useState([])

  function startAddGoalHandler() {
    setModalIsVisibal(true)
  }

  function endAddGoalHandler() {
    setModalIsVisibal(false)
  }

  function addGoalHandler(goalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
       {text: goalText,
         id: Math.random().toString()},
      ])

      endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }


  return (
    <View style={styles.appContainer}>
      <Button title='add new' color='#5e8acc' onPress={startAddGoalHandler}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.todoContainer}>
        <FlatList data={goals} renderItem={itemData => {
          return (
            <GoalItem  text={itemData.item.text}  id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
          )
        }} 
        keyExtractor={(item, index) => {
          return item.id
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
  todoContainer: {
    flex: 5,
  },

});
