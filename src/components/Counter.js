import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import { observer, inject } from 'mobx-react'

@inject('CounterStore', 'PersonStore')
@observer
export default class Counter extends Component {
    render() {
        const {CounterStore, PersonStore} = this.props
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
                <Text>{PersonStore.fullName}</Text>
                <View>
                    <Button 
                        title = 'Change Name'
                        onPress={PersonStore.changeName}
                        />
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