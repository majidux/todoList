import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AddTodo from "../Components/AddTodo";
import List from "../Components/List";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import reducer from '../services/reducers/reducer';
export const store=createStore(reducer);

export default class Home extends Component {
    
    render() {
        return (
            <Provider store={store} style={styles.className}>
                <AddTodo/>
                <List/>
            </Provider>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
