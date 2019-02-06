import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import Home from "./src/Home";
import AppRedux from "./roocketRedux/components/AppRedux";
import TodoListSimple from "./todoListSimple/TodoListSimple";


export default class App extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          {/*<Home/>*/}
          {/*<AppRedux/>*/}
          <TodoListSimple/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
