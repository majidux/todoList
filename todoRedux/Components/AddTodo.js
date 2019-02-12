import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {setText} from "../services/actions/action";

class AddTodo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            // textItems: []
        }
    }
    
    addText = (text) => this.setState({text: text});
    addTextItem = () => {
        // let textItem = this.state.textItems;
        if(this.state.text.length===0){
            return;
        }
        else{
            // console.warn(this.state.text);
            // this.setState({textItems: [...textItem, this.state.text]},this.setState({text:''}));
            this.props.setText(this.state.text);
            this.setState({text:''})
        }
    };
    
    render() {
        return (
            <View style={styles.className}>
                <View style={styles.textArea}>
                    <TextInput value={this.state.text} onChangeText={this.addText.bind(this)} placeholder={'Write something'}/>
                </View>
                
                <TouchableOpacity style={styles.addButtonStyle} onPress={this.addTextItem.bind(this)}>
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

const mapStateToProps = state => {
    return {
        allItems: state.textItems
    }
};

export default connect(mapStateToProps,{setText})(AddTodo);
