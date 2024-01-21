import React from 'react';
import { StyleSheet, Text, View } from "react-native";

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/*Today,s Tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>{/*This is where the tasks will go*/}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {},
});

export default App;
