import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex :1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    backgroundColor: '#FFF',
    marginRight: 5,
  },
  button: {
    flex: 1,
    backgroundColor: '#008080',
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  },
    linkText: {
      fontSize: 32,
      color: 'rgb(95, 177, 237)',
    }
});

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
    }
  }

  _onPress(){
    this.setState({userId: this.state.userId});
    this.setState({password: this.state.password});
  }

  render() {
    const {
      userId,
      password
    } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
        />
        <TextInput
          style={styles.textInput}
        />
        <Text>{text}</Text>
        <Text>PageA</Text>
        <TouchableOpacity onPress={Actions.PageB}>
          <Text style={styles.linkText}>Link</Text>
        </TouchableOpacity>
      </View>
    );
  }
}





