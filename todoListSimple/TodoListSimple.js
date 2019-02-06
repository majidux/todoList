import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    TouchableHighlight,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export default class TodoListSimple extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            inputText: ''
        }
    }
    
    inputer = text =>{
        this.setState({inputText:text})
    };
    
    
    
    
    submitter = () => {
        if(!this.state.inputText.length){
            return;
        }
        else{
            const newItem = {
                text:this.state.inputText,
                isCompleted:false
            };
            this.setState(prev => ({...prev,items:[...prev.items,newItem]}),()=>this.setState({inputText:''}))
        }
    };
    
    
    
    
    changeActivity = i =>{
        this.setState({
            items:[
                ...this.state.items.slice(0,i),
            {
                ...this.state.items[i],
                isCompleted: !this.state.items[i].isCompleted
            },
                ...this.state.items.slice(i+1),
            ]
        })
    };
    
    
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.container}>
                    <View style={styles.viewAll}>
                        <Text>To Do</Text>
                    </View>
                    <View style={{height:300, backgroundColor:'pink'}}>
                        <Text>What do you want to do?</Text>
                        <TextInput
                            placeholder={'Write your chores'}
                            onChangeText={this.inputer.bind(this)}
                            value={this.state.inputText}
                        />
                        
                        <TouchableOpacity underlayColor={'#fff'} onPress={()=>this.submitter()} style={styles.touchableStyle}>
                            <Text>ADD</Text>
                        </TouchableOpacity>
                    </View>
                    <KeyboardAvoidingView>
                        <ScrollView>
                            {
                                this.state.items.map((item,index)=>
                                    <Text
                                        key={index}
                                        onPress={this.changeActivity.bind(this,index)}
                                        style={[styles.itemStyles,{textDecorationLine: this.state.items[index].isCompleted ? 'line-through':'none'}]}
                                    >{index +1} &#8226; {item.text}{' '}
                                    </Text>
                                )
                            }
                            {
                                console.log(this.state.items)
                            }
                        </ScrollView>
                    </KeyboardAvoidingView>
                
                </View>
                {/*<KeyboardAvoidingView style={styles.container}>*/}
                    {/*<View style={styles.viewAll}>*/}
                        {/*<Text>TO DO</Text>*/}
                    {/*</View>*/}
                    {/*<View style={styles.viewTextInput}>*/}
                        {/*<Text>What You Want To Do ?</Text>*/}
                        {/*<TextInput*/}
                            {/*placeholder="WRITE IT DOWN"*/}
                            {/*onChangeText={this.inputer.bind(this)}*/}
                            {/*value={this.state.inputText}*/}
                        {/*/>*/}
                        {/*<TouchableHighlight underlayColor="#fff" onPress={this.submitter} style={styles.touchableStyle}>*/}
                            {/*<Text style={styles.addButton}>ADD #{this.state.items.length + 1} ITEM</Text>*/}
                        {/*</TouchableHighlight>*/}
                    {/*</View>*/}
                    {/*<KeyboardAvoidingView style={styles.avoidView}>*/}
                        {/*<ScrollView>*/}
                            {/*{this.state.items.map((item, index) => (*/}
                                {/*<Text onPress={this.changeActivity.bind(this, index)}*/}
                                      {/*key={index}*/}
                                      {/*style={[styles.itemStyles, {textDecorationLine: this.state.items[index].isCompleted ? 'line-through' : 'none '}]}*/}
                                {/*>{index + 1} &#8226; {item.text}{" "}*/}
                                {/*</Text>*/}
                            {/*))}*/}
                        {/*</ScrollView>*/}
                    {/*</KeyboardAvoidingView>*/}
                {/*</KeyboardAvoidingView>*/}
            </View>
        
        
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        // backgroundColor: "#cdcdcd",
    },
    avoidView: {
        flex: 4,
        // height:300,
        backgroundColor: "#2c3e75"
    },
    viewAll: {
        // flex: 1,
        borderWidth: 1,
        borderColor: "#666",
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    viewTextInput: {
        flex: 5,
        borderWidth: 1,
        borderColor: "#777",
        marginTop: 5
    },
    touchableStyle: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ccc"
    },
    addButton: {
        color: "#333",
        fontWeight: "800",
        fontFamily: "Roboto",
        fontSize: 18
    },
    itemStyles: {
        color: "#000000",
        fontWeight: "800",
        fontFamily: "Roboto",
        fontSize: 18,
        
        textDecorationStyle: 'solid'
    }
    
});
