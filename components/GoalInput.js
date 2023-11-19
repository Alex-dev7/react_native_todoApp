import { useState } from "react"
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native"

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
            <Image style={styles.image} source={require('../assets/images/light.png')} />
            <TextInput
            style={styles.textInput}
           placeholderTextColor={'#3b3e3e'}
            placeholder="Your daily todo list"
            onChangeText={goalInputHandler}
            value={goalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Add todo" onPress={addGoalHandler}  color={'white'}/>
                </View>
                <View style={styles.button}>
                    <Button title='cancel' onPress={props.onCancel} color={'white'}/>
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
        backgroundColor: '#1d7e7c',
        padding: 16,
        paddingBottom: '20%',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#38bfbd00',
        width: '100%',
        padding: 8,
        color: 'white',
        borderRadius: 4,
        backgroundColor: '#31b4b2',
        padding: 15,
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: '30%',
        marginHorizontal: 8,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 4,
      },
      image: {
        width: 100,
        height: 100,
        margin: 30,
        // marginBottom: 50,
      }
})