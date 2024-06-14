import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useRef, useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { gStyles } from '../styles/style.js';

const videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
export default function VideoScreen() {
    const ref = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });

    useEffect(() => {
        const subscription = player.addListener('playingChange', isPlaying => {
            setIsPlaying(isPlaying);
        });

    return () => {
        subscription.remove();
        };
    }, [player]);

    return (
        <SafeAreaView style={gStyles.container}>
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
        </SafeAreaView>
    );
}

