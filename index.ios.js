import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import GoalsPage from './scripts/Pages/GoalsPage';

class XGoalDigger extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="goalsPage" component={GoalsPage} initial={true} hideNavBar="true" />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('XGoalDigger', () => XGoalDigger);
