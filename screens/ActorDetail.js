import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,popularMovieList,MainMovieObject,cast } from '../constants';
import CategoryText from '../components/CategoryText';
import ItemPhotoDesc from '../components/ItemPhotoDesc';

const ActorDetail = ({route,navigation}) => {

    const actor = route.params.actor
  return (
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>

    <CategoryText text="Actor Details" />

    <ItemPhotoDesc item={actor}  />

    </ScrollView>
  )
}

export default ActorDetail