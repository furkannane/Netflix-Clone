import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import MovieCard from './MovieCard';
import { backgroundColor,themeColor } from '../constants';


const MovieCardSlider = ({list,navigation}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

  return (
    <ScrollView style={{ backgroundColor:backgroundColor, marginTop:10, marginBottom:10 }}  horizontal={true}  >

    {list.map((item)=><MovieCard key={item.id} movie={item} navigation={navigation} />)}

    </ScrollView>
  )
}

export default MovieCardSlider