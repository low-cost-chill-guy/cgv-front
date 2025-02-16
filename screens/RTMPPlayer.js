import React, { useRef, useState } from 'react';
import { StyleSheet, View, Button, Text, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export const RTMPPlayer = ({ streamUrl }) => {
  const webViewRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // HTML 컨텐츠: video.js를 사용한 RTMP 플레이어
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.20.3/video-js.min.css" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.20.3/video.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.15.0/videojs-contrib-hls.min.js"></script>
        <style>
          body { margin: 0; background-color: #000; }
          .video-container { width: 100vw; height: 100vh; }
          .video-js { width: 100%; height: 100%; }
        </style>
      </head>
      <body>
        <div class="video-container">
          <video-js id="player" class="vjs-default-skin vjs-big-play-centered">
            <source src="${streamUrl}" type="application/x-mpegURL">
          </video-js>
        </div>
        <script>
          var player = videojs('player', {
            controls: true,
            autoplay: true,
            preload: 'auto',
            fluid: true,
            liveui: true,
            html5: {
              hls: {
                enableLowInitialPlaylist: true,
                smoothQualityChange: true,
                overrideNative: true
              }
            }
          });

          player.on('error', function(error) {
            window.ReactNativeWebView.postMessage(JSON.stringify({
              type: 'error',
              message: error.message || '스트리밍 에러가 발생했습니다.'
            }));
          });

          player.on('loadedmetadata', function() {
            window.ReactNativeWebView.postMessage(JSON.stringify({
              type: 'ready',
              message: 'Stream is ready'
            }));
          });
        </script>
      </body>
    </html>
  `;

  const onMessage = (event) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.type === 'error') {
        setError(data.message);
      } else if (data.type === 'ready') {
        setIsLoading(false);
      }
    } catch (e) {
      console.error('Message parsing error:', e);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ html: htmlContent }}
        style={styles.webview}
        onMessage={onMessage}
        javaScriptEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        mixedContentMode="always"
        scrollEnabled={false}
      />
      {isLoading && <Text style={styles.loading}>로딩 중...</Text>}
      {error && <Text style={styles.error}>에러: {error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -10 }],
    color: '#fff',
  },
  error: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    color: 'red',
    textAlign: 'center',
  }
});
