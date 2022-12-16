import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import ActorCard from './ActorCard';
import { backgroundColor,themeColor } from '../constants';


const ActorCardSlider = ({list,navigation}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

  return (
    <ScrollView style={{ backgroundColor:backgroundColor, marginTop:10, marginBottom:10 }}  horizontal={true}  >

    {list.map((item)=><ActorCard key={item.id} actor={item} navigation={navigation} />)}

    </ScrollView>
  )
}

export default ActorCardSlider