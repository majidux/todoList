import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Todo from './Todo';

export default class TodoList extends Component {
    
    constructor(props){
        super(props);
        this.state={
            todos:[
                {
                    id:1,
                    text:'todo 1'
                },
                {
                    id:2,
                    text:'todo 2'
                }
            ]
        }
    }
    
    render() {
        return (
            <View style={styles.className}>
                {
                    this.state.todos.map(item => <Todo key={item.id} {...item}/>)
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        // justifyContent:'center',
        alignItems:'center'
    }
});
