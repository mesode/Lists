import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class List extends Component {
    state = {
        names: [
            {
                id: 0,
                name: 'Rose',
            },
            {
                id: 1,
                name: 'Noela',
            },
            {
                id: 2,
                name: 'Anna',
            },
            {
                id: 3,
                name: 'Robert',
            }
        ]
    }
    alertItemName = (item) => {
        alert(Item.name)
    }
    render(){
        return (
            <View>
                {
                    this.state.names.map ((item, index) => (
                        <TouchableOpacity
                        key = {item.id}
                        style = {styles.container}
                        onPress = {() => this.alertItemName(item)} >

                        <Text style = {styles.text}>
                            {item.name}
                        </Text>
                      </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

}
export default List

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        marginTop: 50,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c',
    }
})
