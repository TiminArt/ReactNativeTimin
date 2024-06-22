import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from './Loading';
import DataWeather from './DataWeather';

const API_KEY = '6685396bbc6049b5f92dc21e51e8ba79';

export default class extends React.Component {
    // Состояние - находимся в процессе загрузки
    state = {
        isLoading: true
    };
    // Ассинхронная функция для получения погоды 
    getWeather = async (latitude, longitude) => {
        // Используем аксиос для реализации get - получения данных о погоде (по ссылке, которую получили на OpenWeather - c API ключиком) ps. ссылка 
        // в обратных кавычках.
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`); 
        const data = response.data;
        // Когда получаем данные о погоде - убираем экран загрузки 
        this.setState({
            isLoading: false, 
            temp: data.main.temp, 
            condition: data.weather[0].main,
        });
        console.log('Данные', data.weather[0].main);
    }

    // Ассинхронная (должна иметь await) функция получения геопозиции и сохранение 
    // ее в переменную.
    getLocation = async () => {
        try {
            // Запрашивает у пользователя разрешения на определение местоположения. 
            await Location.requestForegroundPermissionsAsync();
            // Устанавливаем "ожидание", пока не исполнится код. 
            // Из переменной достаем широту и долготу через фигурные скобки и сохраняем их в разные переменные.
            const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
            // Передаем в функцию погоды координаты.
            this.getWeather(latitude, longitude);
            
        } catch (error) {
            Alert.alert('Не получается определить место', 'Ошибка')
        }
    }
    // Используем метод жизненного цикла для вызова асинхронной функции
    componentDidMount() {
        this.getLocation();
    }

    render () {
        // "Распаковка" isLoacing
        const {isLoading, temp, condition} = this.state;
        return (
            // Проверка, находимся ли мы в состоянии загрузки и в погодных данных передаем в качестве пропсов температуру и округляем ее.
            isLoading ? <Loading /> : <DataWeather temp={Math.round(temp)} condition={condition}/>
        );
    };
};