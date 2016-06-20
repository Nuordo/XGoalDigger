import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Goal = ({goal}) => {
  return (
    <View style={styles.goalView}>
      <Text style={[styles.text, styles.goalName]}>{goal.name}</Text>
      <Text style={[styles.text, styles.goalLevel]}>Level {goal.level}</Text>
      <View style={[styles.line]} />
      <Text style={[styles.text, styles.goalDescription]}>{goal.description}</Text>
    </View>
  )
}

Goal.propTypes = {
  goal: React.PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  line: {
    marginTop: 10,
    marginBottom: 10,
    height: 1,
    width: 260,
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  goalView: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
  goalName: {
    fontSize: 42,
    fontWeight: '700',
    alignSelf: 'center'
  },
  goalLevel: {
    fontSize: 22,
    fontWeight: '300',
    width: 220,
    alignSelf: 'center'
  },
  goalDescription: {
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'center',
    lineHeight: 22,
    width: 220,
  },
});


export default Goal
