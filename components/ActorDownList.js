import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,secondaryTitleColor } from '../constants';
import ActorHorizontalCard from './ActorHorizontalCard';

const ActorDownList = ({list,navigation}) => {
  return (
    <ScrollView style={{ backgroundColor:backgroundColor, marginTop:10, marginBottom:10 }}  >

    {list.map((item)=><ActorHorizontalCard key={item.id} actor={item} navigation={navigation} />)}

    </ScrollView>
  )
}

export default ActorDownList