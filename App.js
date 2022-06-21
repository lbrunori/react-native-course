import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [list, setList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);


  const addGoalHandler = (input) => {
    /* const listCopy = [...list];
    listCopy.push(input);
    setList(listCopy); */
    setList(currentInput => [...currentInput, {
      text: input,
      id: Math.random().toString()
    }])
    endAddGoalHandler();
  }

  const deleteGoalHandler = (id) => {
    setList(list.filter(l => l.id !== id));
  }

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="#a065ec" onPress={startAddGoalHandler} />
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          {/* <ScrollView >
              {list.map((l, index) => (<View style={styles.goalItem}><Text key={index} style={styles.goalText}>{l}</Text></View>))}
            </ScrollView> */}
          <FlatList data={list} alwaysBounceVertical={false}
            keyExtractor={(item, index) => { return item.id }}
            renderItem={itemData => <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />}>
          </FlatList>
        </View>
      </View>
    </>
    /* <View style={styles.container}>
    <View>
      <Text>Another piece of text!</Text>
    </View>
    <Text style={styles.dummyText}>{elGordoText}</Text>
    <Button
      onPress={onPressElGordo}
      title="¿What is that?"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
    <StatusBar style="auto" />
  </View> */
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a"
  },
  goalsContainer: {
    flex: 10
  }
})

/* 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    borderColor: 'red',
    borderWidth: 2,
    padding: 16
  }
}) */;
