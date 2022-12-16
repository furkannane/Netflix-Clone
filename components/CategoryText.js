import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native';
import React, { useState } from 'react'
import { primaryTitleColor,themeColor } from '../constants';

const CategoryText = ({color,text,colorDark}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

  return (
    <View style={{ height:height/15, backgroundColor:color?color:themeColor, flexDirection:"row" }}>

      <View style={{ height:"100%", width:15,backgroundColor:colorDark?colorDark:primaryTitleColor }}/>

      <Text style={{ fontWeight:'bold', color:"white", alignSelf:"center", marginLeft:20, fontSize:20 }}>{text}</Text>
    </View>
  )
}

export default CategoryText