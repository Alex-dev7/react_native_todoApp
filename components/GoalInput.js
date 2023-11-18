import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

function GoalInput(props) {
    const [goalText, setGoalText] = useState('')

    function goalInputHandler(enteredText) {
       setGoalText( enteredText) 
       }

    function addGoalHandler() {
        if(goalText.length > 0 ){
            props.onAddGoal(goalText)
        } 
        setGoalText('')
    }

  return (
    <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
        placeholder="Your daily todo list"
        onChangeText={goalInputHandler}
        value={goalText}
        />
        <Button title="Add todo" onPress={addGoalHandler} />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
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
})