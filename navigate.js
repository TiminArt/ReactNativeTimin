import React from 'react';
import Main from './components/Main.js';
import Contacts from './components/Contacts.js';
import Weather from './components/Weather.js';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { gStyles } from './styles/style.js';

const Stack = createStackNavigator();

export default function Navigate() { 
    return <NavigationContainer style={gStyles.container}> 
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{title: 'Главная'}}
            />
            <Stack.Screen
                name="Contacts"
                component={Contacts}
                options={{title: 'Контакты'}}
            />
            <Stack.Screen
                name="Weather"
                component={Weather}
                options={{title: 'Погода'}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}