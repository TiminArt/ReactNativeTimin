import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, SafeAreaView, Alert, TouchableOpacity, Image, Button} from 'react-native';
// Подключаем файл с общими стилями 
import { gStyles } from '../styles/style.js';

export default function Main({ navigation }) {
    // Функция перехода на другие страницы
    const goContacts = () => {
        navigation.navigate('Contacts');
    }
    const goWeather = () => {
        navigation.navigate('Weather');
    }
    // Функция при нажатии на кнопку с вызовом всплывающего окна c текстовым полем, которое выводит введенный текст в консоль.
    const onPressButton1 = () => Alert.prompt('Привет!', 'Вы нажали на кнопку! Поздравляю!', text => console.log(text));

return (
    <SafeAreaView style={gStyles.container}>
        {/* Текст */}
        <Text style={gStyles.text} >Привет! Это погодное приложение студента Тимина Артемия из группы 211-322!</Text>

        {/* Добавляем изображение и вешаем на него стили  */}
        <Image style={gStyles.image} source={require('../assets/weather.png')}/>

        {/* Кнопка */}
        <TouchableOpacity style={gStyles.button} onPress={onPressButton1}>
            <Text style={gStyles.buttonText}>Текстовой ввод</Text>
        </TouchableOpacity>

        {/* Кнопка для перехода на вторую страницу */}
        <TouchableOpacity style={gStyles.button} onPress={goContacts}>
            <Text style={gStyles.buttonText}>Контакты</Text>
        </TouchableOpacity>

        {/* Кнопка для перехода на страницу погоды */}
        <TouchableOpacity style={gStyles.button} onPress={goWeather}>
            <Text style={gStyles.buttonText}>Погода</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
    </SafeAreaView>
    );
}