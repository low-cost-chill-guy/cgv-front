import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { RTMPPlayer } from './RTMPPlayer'; 

const RTMPPlayerScreen = () => {
    const streamUrl = 'https://fd5d377f51a6.ap-northeast-2.playback.live-video.net/api/video/v1/ap-northeast-2.277707137172.channel.LFmE8oxhH4gH.m3u8';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.playerContainer}>
        <RTMPPlayer streamUrl={streamUrl} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  playerContainer: {
    flex: 1,
  },
});

export default RTMPPlayerScreen