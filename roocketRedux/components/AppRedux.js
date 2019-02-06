import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import reducers from '../reducers';

export default class AppRedux extends Component {
    render() {
        const store = createStore(reducers);
        return (
            <Provider store={store} style={styles.appRedux}>
                <AddTodo />
                <TodoList/>
            </Provider>
        );
    }
}
const styles = StyleSheet.create({
    appRedux: {
        flex: 1,
    }
});
