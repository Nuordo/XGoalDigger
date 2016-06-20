import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View style={[styles.buttonView]}>
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={this.props.highlightedColor}
        style={[styles.buttonBack, this.props.style]}
      >
        <Text
          style={[styles.buttonText, this.props.titleStyle]}
        >
          {this.props.title}
        </Text>
      </TouchableHighlight>
      </View>
    );
  }
}

Button.propTypes = {
  style: View.propTypes.style,
  titleStyle: Text.propTypes.style,
};

const styles = StyleSheet.create({
  buttonView: {
    padding: 20
  },
  buttonText: {
    backgroundColor: 'transparent',
    fontSize: 16,
    textAlign: 'center'
  },
  buttonBack: {
    padding: 12,
    borderRadius: 4
  }
});
