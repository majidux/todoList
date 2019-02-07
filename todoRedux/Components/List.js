import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
class List extends Component {
    render() {
        return (
            <View style={styles.itemsMap}>
                {
                    this.props.allItems.map((item, i) =>
                        <View key={i}>
                            <Text>{item}</Text>
                        </View>
                    )
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    },
    itemsMap: {
        backgroundColor: 'skyblue',
        flex: 1,
    },

});

const mapStateToProps = state =>{
    return{
        allItems:state.items
    }
};

export default connect(List)(mapStateToProps);
