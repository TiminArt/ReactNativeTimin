import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native-safe-area-context';
import { gStyles } from '../styles/style';


export default function DataWeather({temp, condition}) {
    return (
        <View style={gStyles.container}>
            <Text>{temp}</Text>
        </View>
    );
}

DataWeather.propTypes = {
    // Достаем обязательное число градусов погоды
    temp: PropTypes.number.isRequired, 
    // Создаем массив с погодными условиями и делаем его тоже обязательным
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"]).isRequired,
}