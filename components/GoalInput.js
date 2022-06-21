import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props) {
    const [input, setInput] = useState('');

    const goalInputHandler = (enteredText) => {
        setInput(enteredText);
    }

    const addGoalHandler = () => {
        if (input === '') {
            return;
        }
        props.onAddGoal(input);
        setInput('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/adaptive-icon.png')} style={styles.image} />
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={input} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add goal" onPress={addGoalHandler} color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>)
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'Column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        width: '100%',
        padding: 16,
        color: '#120438',
        borderRadius: 6,
        backgroundColor: '#e4d0ff'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100
    }
})