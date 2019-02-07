import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AddTodo from "../Components/AddTodo";
import List from "../Components/List";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.className}>
                <AddTodo/>
                <List/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
