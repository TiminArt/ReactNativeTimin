// Файл с общими стилями, которые можно будет использовать на разных страницах
import { StyleSheet, Platform } from 'react-native';

export const gStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25516E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    halfContainerGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempDescription: {
        backgroundColor: '#fff',
        alignItems: 'start',
        justifyContent: 'start',
        margin: 20,
        borderRadius: 40,
        fontWeight: 'bold',
        marginTop: 150,
    },
    textTemp: {
        textAlign: 'center',
        color: '#25516E',
        margin: 25,
        fontSize: 16,
    },
    temp: {
        color: '#fff',
        fontSize: 55,
        fontWeight: 'bold',
        margin: 10,
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        margin: 12,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        margin: 15,
        fontSize: 16,
        // Для примера сделал другой цвет обычного текста на разных платформах.
        ...Platform.select({
            ios: {
                color: '#EDE8E4'
            },
            android: {
                color: 'green'
            },
            default: {
                // Для других платформ (веб...)
                color: 'white',
            },
        }),
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: '#25516E',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        margin: 30,
        width: 220,
        height: 220,
        borderRadius: 150,
    },
    video: {
        width: 350,
        height: 275,
    },
});