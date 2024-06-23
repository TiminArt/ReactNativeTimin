import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, SafeAreaView, Alert, TouchableOpacity, Image, Platform } from 'react-native';
// Подключаем файл с общими стилями 
import { gStyles } from '../styles/style.js';

export default function Main() {
    // Создаем состояние geniusName с помощью хука useState и устанавливаем начальное значение как пустая строка
    const [geniusName, setGeniusName] = useState('');

    const onPressButton = () => {
        // Создаем всплывающее окно, в которое будем вводить имя
        Alert.prompt('Привет!', 'Вы нажали на кнопку! Как зовут этого гения!?', text => {
            setGeniusName(text);
            console.log(text);
        });
    };

    const majorVersionIOS = parseInt(Platform.Version, 10);
    if (majorVersionIOS >= 10) {
        console.log('Ваша версия IOS старше 10 и имеет номер', majorVersionIOS)
    };
    
    return (
        <SafeAreaView style={gStyles.container}>   
            {/* Текст */}
            <Text style={gStyles.title}>
                Привет! Это погодное приложение студента Тимина Артемия из группы 211-322!
            </Text>
            {/* Добавляем изображение и вешаем на него стили  */}
            <Image style={gStyles.image} source={require('../assets/weather.png')} />
            {/* Кнопка */}
            <TouchableOpacity style={gStyles.button} onPress={onPressButton}>
                <Text style={gStyles.buttonText}>Как Вас зовут?</Text>
            </TouchableOpacity>
            {/* Вывод введенного текста на экран */}
            {geniusName !== '' && <Text style={gStyles.text}>Ps. Если Вы забыли, то Вас зовут {geniusName}</Text>}
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}