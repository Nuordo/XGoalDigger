import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import { Actions } from 'react-native-router-flux';
import Goal from '../Components/Goal';
import Button from '../Components/Button';

export default class GoalsPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      goals: [],
      goal: {},
      user: null,
      goalNumber: ''
    };
  }
  pickRandomGoal() {
    const goalNumber = Math.floor(Math.random() * this.state.goals.length);
    this.setState({
      goal: this.state.goals[goalNumber],
      goalNumber: goalNumber
    });
  }
  componentDidMount() {
    fetch('http://goals.unleash.x-team.com/api/v1/goals')
    .then((response) => response.text())
    .then((responseText) => {
      this.setState({
        goals: JSON.parse(responseText)
      });
      this.pickRandomGoal();
    })
    .catch((error) => {
      console.warn(error);
    });

    GoogleSignin.configure({
      iosClientId: '136212089108-dhu9pbj3tljeu0i9am7lk5qa69dglrcd.apps.googleusercontent.com'
    }).done();
  }
  addGoalToPath() {
    fetch('http://paths-staging.unleash.x-team.com/api/v1/paths/' + this.state.user.id + '/goals', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.goal)
    })
    .then((response) => {
      console.log(response);
      this.pickRandomGoal();
    })
    .catch((error) => {
      console.warn(error);
    });
  }
  logIn() {
    GoogleSignin.signIn()
    .then((user) => {
      this.setState({user: user});
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }
  render() {
    let greenLabel = 'Log in';
    let greenAction = this.logIn;
    if (this.state.user) {
      greenLabel = 'Add to my path';
      greenAction = this.addGoalToPath;
    }

    return (
      <View style={styles.container}>
        <Goal goal={this.state.goal} />
        <View style={styles.buttonBox}>
          <Button
            style={{backgroundColor:'#0ea378'}}
            highlightedColor='#007655'
            title={greenLabel}
            titleStyle={{color:'white'}}
            onPress={greenAction.bind(this)}
          />
          <Button
            style={{backgroundColor:'red'}}
            highlightedColor='#ff4000'
            title="Next"
            titleStyle={{color:'white'}}
            onPress={() => {this.pickRandomGoal()}}
          />
        </View>
        <Text style={[styles.footerText]}>Goal {this.state.goalNumber}/{this.state.goals.length}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  buttonBox: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '200',
    alignSelf: 'center',
  }
});
