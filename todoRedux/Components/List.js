import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {deleteText} from "../services/actions/action";

class List extends Component {
    
    deleteItem = (index) => {
        this.props.deleteText(index)
    };
    
    render() {
        return (
            <View style={styles.itemsMap}>
                {
                    this.props.allItems.map((item, index) =>
                        <View style={styles.itemsView} key={index}>
                            <Text>{item}</Text>
                            <TouchableOpacity onPress={this.deleteItem.bind(this,index)}><Text>DELETE</Text></TouchableOpacity>
                        </View>
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemsMap: {
        backgroundColor: 'skyblue',
        flex: 1,
    },
    itemsView:{
        flexDirection:'row',
        justifyContent:'space-around'
    }
    
});

const mapStateToProps = state => {
    return {
        allItems: state.textItems
    }
};

export default connect(mapStateToProps,{deleteText})(List);
