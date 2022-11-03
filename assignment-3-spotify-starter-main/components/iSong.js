import React, { useState } from 'react';
import { useSpotifyAuth } from "../utils";
import {SafeAreaView, View, Text, StyleSheet, Image} from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";


export default function Song({index, song, artistName, album, duration, image}) {

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.songIndex}> {index} </Text>

      <Image source={image} style = {styles.imageStyle}/>

      <View style = {styles.twoSong}>
        <Text style = {styles.logo} numberOfLines={1} > {song} </Text>
        <Text style = {{color: '#B3B3B3'}}> {artistName} </Text>
      </View>

      <Text style = {styles.albumStyle} numberOfLines={1} > {album} </Text>
      <Text style = {{color: '#B3B3B3'}} numberOfLines={1} > {millisToMinutesAndSeconds(duration)} </Text>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  twoSong: {
    paddingHorizontal: 10,
  },

  logo: {
    color: 'white',
  },

  songIndex: {
    color: '#B3B3B3',
    margin: 20,
  },

  albumStyle: {
    color: '#B3B3B3',
    flex: 5,
  }
});
