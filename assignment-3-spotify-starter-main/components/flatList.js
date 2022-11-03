import React, { useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, FlatList} from "react-native";
import Constants from 'expo-constants';
import Song from '../components/iSong';

export default function FlatListh ({trackListData}) {
  const renderTrackItem = ({ item, index }) => {
    return <Song
      index={index + 1}
      artistName={item.artists[0].name}
      song={item.name}
      image={item.album.images[2]}
      album={item.album.name}
      duration={(item.duration_ms)}
      />
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image source={require('../assets/spotify-logo.png')} style = {styles.logo}/>
        <Text style={styles.titleText}> My Top Tracks </Text>
      </View>

      <FlatList
        data={trackListData}
        renderItem={(item) => renderTrackItem(item)}
        keyExtractor={(item, index) => item.id}
      />
    </SafeAreaView>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#191414',
    paddingHorizontal: 100,
  },
  logo: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    padding: '20',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 24,
  }
});
