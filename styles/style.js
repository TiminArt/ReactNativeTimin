// Файл с общими стилями, которые можно будет использовать на разных страницах
import { StyleSheet } from 'react-native';


export const gStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25516E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#EDE8E4',
        textAlign: 'center',
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
    }
});