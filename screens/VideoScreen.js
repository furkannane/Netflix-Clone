import * as React from 'react';
import { View, StyleSheet, Button,ScrollView } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { backgroundColor,themeColor,primaryTitleColor } from '../constants';

const VideoScreen = ({route,navigation}) => {

    const url = route.params.movie.video_url
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    

    return (
      <View style={{ flex:1, backgroundColor:backgroundColor }}>
        <Video
          ref={video}
          style={{ flex:1 }}
          source={{
            uri: url
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        
      </View>
    )
}

export default VideoScreen