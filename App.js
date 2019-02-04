
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Todomajid from "./src2/Todomajid";


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Todomajid/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
