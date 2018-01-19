import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';

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

export default class PageA extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        UserID: '',
        Password: '',
      };
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
        <Button
          onPress={() => {this.props.navigation.navigate('ChatRoom')}}
          title = {'ログイン'}
         />
         <Text>  </Text>
        <Button
          onPress={() => {this.props.navigation.navigate('PageB')}}
          title = {'新規登録'}
        />
      </View>
    );
  }
}