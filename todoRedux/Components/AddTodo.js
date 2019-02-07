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
        if(this.state.textItems.length<0){
            return;
        }
        else{
            this.setState({textItems: [...textItem, this.state.text],text:''});
        }
    };
    
    render() {
        return (
            <View style={styles.className}>
                <View style={styles.textArea}>
                    <TextInput onChangeText={this.addText} placeholder={'Write something'}/>
                </View>
                
                <TouchableOpacity style={styles.addButtonStyle} onPress={this.addTextItem}>
                    <View>
                        <Text>ADD</Text>
                    </View>
                </TouchableOpacity>
                {
                    console.warn(this.state.textItems)
                }
                
                <View style={styles.itemsMap}>
                    {
                        this.state.textItems.map((item, i) =>
                            <View style={{flex:1}} key={i}>
                                <Text>{item}</Text>
                            </View>
                        )
                    }
                </View>
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
    itemsMap: {
        backgroundColor: 'skyblue',
        flex: 1,
    },
    textArea: {
        backgroundColor: 'lightgreen',
        flex: 1
    }
});
