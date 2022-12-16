import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Dimensions } from 'react-native';
import MovieCardWithActors from './MovieCardWithActors';
import { backgroundColor,themeColor,secondaryTitleColor } from '../constants';

const MovieCardWithActorsList = ({list,navigation}) => {
    

  return (
    <ScrollView style={{ backgroundColor:backgroundColor, marginTop:10, marginBottom:10 }}  >

    {list.map((item)=><MovieCardWithActors key={item.movie.id} item={item} navigation={navigation} />)}

    </ScrollView>
  )
}

export default MovieCardWithActorsList