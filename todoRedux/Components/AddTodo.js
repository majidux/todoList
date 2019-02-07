import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

export default class AddTodo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            textItems: []
        }
    }
    
    addText = (text) => this.setState({text: text});
    addTextItem = () => {
        let textItem = this.state.textItems;
        if(this.state.text.length===0){
            return;
        }
        else{
            this.setState({textItems: [...textItem, this.state.text]},this.setState({text:''}));
        }
    };
    
    render() {
        return (
            <View style={styles.className}>
                <View style={styles.textArea}>
                    <TextInput value={this.state.text} onChangeText={this.addText} placeholder={'Write something'}/>
                </View>
                
                <TouchableOpacity style={styles.addButtonStyle} onPress={this.addTextItem}>
                    <View>
                        <Text>ADD</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 30
    },
    addButtonStyle: {
        backgroundColor: 'pink',
        flex: 1,
    },
    textArea: {
        backgroundColor: 'lightgreen',
        flex: 1
    }
});
