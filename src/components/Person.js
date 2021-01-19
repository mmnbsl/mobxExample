import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('PersonStore')
@observer
export default class Person extends Component {
    render() {
        const { PersonStore } = this.props
        return (
            <View style = {style.container}>
                <Text>{PersonStore.fullName}</Text>
                <Button 
                    title = {'Change Name'}
                    onPress = {PersonStore.changeName}
                    />
            </View>
        );
    }
}
const style = StyleSheet.create({
    container : {
        alignItems : 'center'
    }
})