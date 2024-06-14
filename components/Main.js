import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, SafeAreaView, Alert, TouchableOpacity, Image, Button} from 'react-native';
// Подключаем файл с общими стилями 
import { gStyles } from '../styles/style.js';

export default function Main() {
    // Создаем состояние geniusName с помощью хука useState и устанавливаем начальное значение как пустая строка
    const [geniusName, setGeniusName] = useState('');

    const onPressButton1 = () => {
        // Создаем всплывающее окно, в которое будем вводить имя
        Alert.prompt('Привет!', 'Вы нажали на кнопку! Как зовут этого гения!?', text => {
            setGeniusName(text);
            console.log(text);
        });
    }

    return (
        <SafeAreaView style={gStyles.container}>
            {/* Текст */}
            <Text style={gStyles.text}>Привет! Это погодное приложение студента Тимина Артемия из группы 211-322!</Text>

            {/* Добавляем изображение и вешаем на него стили  */}
            <Image style={gStyles.image} source={require('../assets/weather.png')} />

            {/* Кнопка */}
            <TouchableOpacity style={gStyles.button} onPress={onPressButton1}>
                <Text style={gStyles.buttonText}>Пример текстового ввода</Text>
            </TouchableOpacity>

            {/* Вывод введенного текста на экран */}
            {geniusName !== '' && <Text style={gStyles.text}>Если Вы не знали, то Вас зовут {geniusName}</Text>}

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}