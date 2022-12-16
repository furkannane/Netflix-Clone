import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import MovieHorizontalCard from './MovieHorizontalCard';

import { backgroundColor,themeColor } from '../constants';

const MovieDownList = ({list,navigation}) => {
  return (

    <ScrollView style={{ backgroundColor:backgroundColor, marginTop:10, marginBottom:10 }}  >

    {list.map((item)=><MovieHorizontalCard key={item.id} movie={item} navigation={navigation} />)}

    </ScrollView>
  )
}

export default MovieDownList