import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Footer,
} from 'react-native';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';


export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  render() {
    const {
      list,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <TodoInput onPress={this._onPress} />
          <View style={styles.todoListContainer}>
            <FlatList
              style={styles.todoList}
              data={list}
              renderItem={({ item, index }) => (
                <TodoItem
                  onDone={this._done(index)}
                  onDelete={this._delete(index)}
                  {...item}
                />
              )}
            />
          </View>
          <View style={styles.footer}><Text>My fixed footer</Text></View>
        </View>
      </View>
    );
  }

  _delete = (index) => () => {
    const list = [].concat(this.state.list);
    list.splice(index, 1);

    this.setState({
      list,
    });
  }

  _done = (index) => () => {
    const list = [].concat(this.state.list);
    list[index].done = !list[index].done;

    this.setState({
      list,
    });
  }

  _onPress = (text) => {
    const list = [].concat(this.state.list);

    list.unshift({
      key: Date.now(),
      text: text,
      done: false,
    });

    this.setState({
      list,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 40,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  },
  todoListContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  todoList: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  footer: {
    flex: 0.15,
    backgroundColor: '#FFF',
    width: 400,
  }
});