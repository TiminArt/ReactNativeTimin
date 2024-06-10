// import React from 'react';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './components/Main.js';
import Contacts from './components/Contacts.js';
import Weather from './components/Weather.js';

function MainComponent() {
    return (
        <Main />
    );
}

function ContactsComponent() {
    return (
        <Contacts />
    );
}

function WeatherComponent() {
    return (
        <Weather />
    );
}

const Tab = createBottomTabNavigator();

export default function Navigate() {
    return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Main" options={{title: 'Главная'}} component={MainComponent}/>
            <Tab.Screen name="Contacts" options={{title: 'Контакты'}} component={ContactsComponent}/>
            <Tab.Screen name="Weather" options={{title: 'Погода'}} component={WeatherComponent} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}