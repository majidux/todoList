import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';

export default class AddTodo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
            tasks: [],
            text: ''
            
        }
    }
    
    handleChange = (event) => {
        this.setState({text:''})
    };
    
    handlePress = (event) => {
        event.preventDefault();
        this.setState({
            text:''
        })
    };
    
    render() {
        return (
            <View style={styles.className}>
                <View>
                    <TouchableOpacity type='submit'><Text style={{fontSize:20,fontWeight: 'bold'}}>Add</Text></TouchableOpacity>
                    <TextInput onChangeText={this.handleChange} placeholder={'Text'} onSubmit={this.handlePress}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        paddingTop:30,
        backgroundColor:'wheat',
        alignItems:'center'
    }
});
