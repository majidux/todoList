import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Todo extends Component {
    render() {
        let {text} = this.props;
        return (
            <View style={styles.className}>
                <Text>{text}</Text>
                {
                    console.log({text})
                }
            </View>
        
        );
    }
}
const styles = StyleSheet.create({
    className: {
        padding:17,
        marginVertical:10,
        backgroundColor:'skyblue'
    }
});
