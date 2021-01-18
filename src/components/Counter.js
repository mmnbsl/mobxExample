import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import CounterStore from '../storage/CounterStore';
import { observer } from 'mobx-react'

@observer
export default class Counter extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.text}>{CounterStore.count}</Text>
                <View style = {styles.buttons}>
                    <Button 
                        title='Decrease'
                        onPress = {CounterStore.decrement} />
                    <Button 
                        title='Increase'
                        onPress = {CounterStore.increase} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flexDirection :'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        fontSize : 58
    },
    buttons : {
        flexDirection : 'row',
    }
})