import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gStyles } from '../styles/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: { 
        iconName: 'thunderstorm', 
        description: 'Гроза: Это явление в атмосфере, сопровождающееся молнией и громом, часто сильными ветрами и интенсивным дождем.', 
        gradient: ['#373B44', '#4286f4'] },
    Drizzle: { 
        iconName: 'nuclear-outline', 
        description: 'Морось: Легкий дождь, обычно выпадает в виде мелких капелек, часто не вызывающий значительного увлажнения.', 
        gradient: ['#bdc3c7', '#2c3e50'] },
    Rain: { 
        iconName: 'rainy', 
        description: 'Дождь: Осадки в виде капель воды, выпадающие из облаков на землю.', gradient: ['#2980B9', '#6DD5FA'] },
    Snow: { 
        iconName: 'snow', 
        description: 'Снег: Осадки в виде замерзших кристаллов льда, которые выпадают из облаков на землю в зимний период.', 
        gradient: ['#7F7FD5', '#86A8E7'] },
    Mist: { 
        iconName: 'nuclear-outline', 
        description: 'Туман: Густые облака тонкого пара или газов, которые могут образоваться из-за пожаров или других источников.', 
        gradient: ['#757F9A', '#D7DDE8'] },
    Clear: { 
        iconName: 'nuclear-outline', 
        description: 'Ясная погода: Солнечный день без облаков и осадков, характеризующийся ясным небом.', 
        gradient: ['#56CCF2', '#2F80ED'] },
    Clouds: { 
        iconName: 'cloud', 
        description: 'Облака: Видимая в атмосфере водяная пара или ледяные частицы в виде облаков, которые могут приносить осадки или изменять погоду.', 
        gradient: ['#83a4d4', '#b6fbff'] },
}

export default function DataWeather({temp, condition}) {
    return (
        <LinearGradient 
        colors={weatherOptions[condition].gradient}
        style={gStyles.containerGradient}>
            <View style={gStyles.containerGradient}>
                {/* Иконки */}
                <Ionicons name={weatherOptions[condition].iconName} size={150} color="white" />
                <Text style={gStyles.temp}>{temp}°</Text>
            </View>
            <View style={gStyles.containerGradient}>
                <View style={gStyles.tempDescription}>
                    <Text style={gStyles.textTemp}>{weatherOptions[condition].description}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

DataWeather.propTypes = {
    // Достаем обязательное число градусов погоды
    temp: PropTypes.number.isRequired, 
    // Создаем массив с возможными погодными условиями и делаем его тоже обязательным
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado", "Clear", "Clouds"]).isRequired,
}

// Экспортируем компонент DataWeather явным именованным способом
export { DataWeather };