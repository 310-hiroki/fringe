import React from 'react';
import {
  Button,
  ScrollView,
  Text,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import PageA from './PageA.js'
import ChatRoom from './ChatRoom.js'
import PageB from './PageB.js'

const PageAScreen = ({ navigation }) => (
  <PageA navigation={navigation} />
);
PageAScreen.navigationOptions = {
  title: 'PageA',
};

const ChatRoomScreen = ({ navigation }) => (
  <ChatRoom navigation={navigation} />
);
ChatRoomScreen.navigationOptions = {
  title: 'ChatRoom',
};

const PageBScreen = ({ navigation }) => (
  <PageB navigation={navigation} />
);
PageBScreen.navigationOptions = {
  title: 'PageB',
};

const App = StackNavigator({
  PageA: { screen: PageAScreen },
  ChatRoom: { path: 'chatroom', screen: ChatRoomScreen },
  PageB: {path: 'pageb', screen: PageBScreen },
}, {
  initialRouteName: 'PageA',
});

export default App;