import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native-safe-area-context';
import { gStyles } from '../styles/style';


export default function DataWeather({temp}) {
    return (
        <View style={gStyles.container}>
            <Text>{temp}</Text>
        </View>
    );
}

DataWeather.propTypes = {
    // Достаем обязательное число градусов погоды
    temp: PropTypes.number.isRequired, 
}