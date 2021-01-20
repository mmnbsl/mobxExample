import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {inject, observer } from 'mobx-react'

@inject('UsersStore')
@observer
export default class Users extends React.Component {
    render() {
        const { UsersStore } = this.props
        return (
            <View style = {styles.container}>
                <Button 
                    title = {'Get Persons'}
                    onPress={() => UsersStore.getDataApi()}
                    />
                <View>{
                    UsersStore.users.map((user, key) => (
                        <View key = {key}>
                            <Text>{user.name.first}</Text>
                        </View>
                    ))
                }</View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})