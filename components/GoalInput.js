import { useState } from "react"
import { Button, StyleSheet, TextInput, View, Modal } from "react-native"

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
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.textInput}
            placeholder="Your daily todo list"
            onChangeText={goalInputHandler}
            value={goalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Add todo" onPress={addGoalHandler} />
                </View>
                <View style={styles.button}>
                    <Button title='cancel' onPress={props.onCancel}/>
                </View>
            </View>
            
        </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: '30%',
        marginHorizontal: 8,
      }
})