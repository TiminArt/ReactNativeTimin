import { useVideoPlayer, VideoView } from 'expo-video';
import { Audio } from 'expo-av';
import { useEffect, useRef, useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { gStyles } from '../styles/style.js';

// Прямая ссылка к видео
const videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function App() {
    // (Музыка) Создание состояния sound (объект звука) с помощью хука useState(). Переменная setSound - функция для обновления
    const [sound, setSound] = useState();
    // (Музыка) isMusicPlaying - состояние играет ли музыка. setIsMusicPlaying - обновление состояния. При инициализации устанавливается в false (музыка не играет)
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    // (Видео) Ref будет использоваться для доступа к элементам компонента. Странно, но ни за что не отвечает (но оно было в доке - решил оставить на всякий)
    const ref = useRef(null);
    // (Видео) Состояния, воспроизводится ли видео 
    const [isPlaying, setIsPlaying] = useState(true);
    // (Видео) Получение ссылки на видео и его запуск
    const player = useVideoPlayer(videoSource, player => {
        player.play();
    });

    // (Музыка) Ассинхронная функция операций с музыкой
    async function playSound() {
        if(!isMusicPlaying) {
            // Получаем файл музыки
            const { sound } = await Audio.Sound.createAsync(require('../assets/Music.mp3'));
            setSound(sound);
            // Включить музыку
            await sound.playAsync();
            setIsMusicPlaying(true);
        } else {
            // Остановить музыку 
            await sound.stopAsync();
            setIsMusicPlaying(false);
            sound.unloadAsync();
        }
    }

    // (Видео) Хук, который следит за состоянием player
    useEffect(() => {
        // (Видео) Создание подписки на событие playingChange с помощью метода addListener объекта player. Слушаем изменения состояния воспроизведения видео и обновляем состояние isPlaying
        const subscription = player.addListener('playingChange', isPlaying => {
            setIsPlaying(isPlaying);
        });

    // (Видео) Возвращение функции из useEffect, которая удаляет подписку subscription
    return () => {
        subscription.remove();
        };
    }, [player]);

    return (
        <SafeAreaView style={gStyles.container}>
            {/* Видео */}
            <Text style={gStyles.title}>
                Мультик про большого кролика
            </Text>
            <VideoView
                ref={ref}
                style={gStyles.video}
                player={player}
                allowsFullscreen
                allowsPictureInPicture
            />
            <TouchableOpacity style={gStyles.button}
                    onPress={() => {
                        if (isPlaying) {
                            player.pause();
                        } else {
                            player.play();
                        }
                        setIsPlaying(!isPlaying);
                    }}>
                <Text style={gStyles.buttonText}>{isPlaying ? 'Пауза' : 'Продолжить'}</Text>
            </TouchableOpacity>
            <Text style={gStyles.title}>
                ********************************************
            </Text>
            {/* Музыка  */}
            <Text style={gStyles.title}>
                Песня: Twenty One Pilots - The Craving
            </Text>
            <TouchableOpacity style={gStyles.button} onPress={playSound}>
                <Text style={gStyles.buttonText}>{isMusicPlaying ? 'Остановить музыку' : 'Включить музыку'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

