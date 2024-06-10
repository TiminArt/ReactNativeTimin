import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';

// import Video from 'react-native-video';
import Video, {VideoRef} from 'react-native-video';

const VideoPlayer = () => {
    // const videoRef = useRef(`https://www.youtube.com/watch?v=6SvP_fUttHk`);
    const background = require('../assets/background.mp4');
    const onBuffer = () => { console.log('Buffering');};
    const onError = () => { console.log('Error loading video') };

    return (
        <Video
            source={background}
            // ref={videoRef}
            onBuffer={onBuffer}
            onError={onError}
            style={styles.backgroundVideo}
        />
    )
}

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default VideoPlayer;