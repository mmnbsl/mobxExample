import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PersonStore from '../storage/PersonStore';
import { observer } from 'mobx-react';

@observer
export default class Person extends Component {
    render() {
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