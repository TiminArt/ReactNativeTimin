import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';
import { gStyles } from '../styles/style.js';

export default function Contacts() {

return (
    <SafeAreaView style={gStyles.container}>
        <Text style={gStyles.text} >Странница контактов</Text>
        <StatusBar style="auto" />
    </SafeAreaView>
    );
}