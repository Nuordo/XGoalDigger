import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import GoalsPage from './scripts/Pages/GoalsPage';
import LoginPage from './scripts/Pages/LoginPage';

class XGoalDigger extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="loginPage" component={LoginPage} type="replace" title="Login" />
          <Scene key="goalsPage" component={GoalsPage} initial={true} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('XGoalDigger', () => XGoalDigger);
