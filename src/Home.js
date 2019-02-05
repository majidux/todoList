import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    AsyncStorage,
    TextInput,
    TouchableOpacity
} from "react-native";


export default class TodoList extends Component {
    
    constructor(props){
        super(props);
        this.state={
            tasks:[],
            text:''
        }
    }
    
    
    textInput = text => {
        this.setState({text: text});
    };
    
    
    
    addTask = () => {
        let notEmpty = this.state.text.trim().length > 0;
        
        if (notEmpty) {
            this.setState(
                prevState => {
                    let {tasks, text} = prevState;
                    return {
                        tasks: tasks.concat({key: tasks.length, text: text}),
                        text: ""
                    };
                },
                () => Tasks.save(this.state.tasks)
            );
        }
    };
    
    
    
    deleteTask = i => {
        this.setState(prevState => {
            let tasks = prevState.tasks.slice();
            tasks.splice(i, 1);
                
                return {tasks: tasks};
            },
            () => Tasks.save(this.state.tasks)
        );
    };
    
    
    render() {
        return (
            <View
                style={styles.container}
            >
                <FlatList
                    style={styles.list}
                    data={this.state.tasks}
                    renderItem={({item, index}) =>
                        <View>
                            <View style={styles.listItemContent}>
                                <Text style={styles.listItem}>
                                    {item.text}
                                </Text>
                                <View style={styles.deleteButton}>
                                    <TouchableOpacity
                                        onPress={() => this.deleteTask(index)}><Text style={{color:'#fff'}}>Delete</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.hr}/>
                        </View>
                    }
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.textInput}
                    onSubmitEditing={this.addTask}
                    value={this.state.text}
                    placeholder="Add Tasks"
                    returnKeyType="done"
                    returnKeyLabel="done"
                />
            </View>
        );
    }
}

let Tasks = {
    
    // convertToArrayOfObject(tasks, callback) {
    //     return callback(
    //         tasks ? tasks.split("||").map((task, i) => ({key: i, text: task})) : []
    //     );
    // },
    
    // all(callback) {
    //     return AsyncStorage.getItem("TASKS", (err, tasks) =>
    //         this.convertToArrayOfObject(tasks, callback)
    //     );
    // },
    
    convertToStringWithSeparators(tasks) {
        return tasks.map(task => task.text).join("||");
    },
    save(tasks) {
        AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        paddingTop: 20
    },
    list: {
        width: "100%"
    },
    listItem: {
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 18
    },
    hr: {
        height: 1,
        backgroundColor: "gray"
    },
    listItemContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textInput: {
        height: 40,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "gray",
        borderWidth: 1,
        width: "100%",
        backgroundColor:'#e9e9e9'
    },
    deleteButton:{
        backgroundColor:'#5776ff',
        padding: 8
    }
});
