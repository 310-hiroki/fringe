import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  AsyncStorage,
} from 'react-native';
import Storage from 'react-native-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textInput: {
    height: 50,
    width: 300,
    backgroundColor: '#FFF',
    marginRight: 5,
  },
  button: {
    flex: 5,
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
  }
});

export default class PageB extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UserID: '',
      Password: '',
      image: '',
    };
  }

  _onPress = () => {
    try {

    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Text>ユーザ名</Text>
      <TextInput style={styles.textInput}
        maxLength = {20}
        valuei={this.state.UserId}
      />
      <Text>パスワード</Text>
      <TextInput style={styles.textInput}
        maxLength = {20}
        value2={this.state.Password}
      />
      <Text>表示画像URL</Text>
      <TextInput style={styles.textInput}
        maxLength = {250}
        value3={this.state.image}
      />
      var user = {
        password: {this.state.password}
        image:
      }
      </View>
    );
  }
}