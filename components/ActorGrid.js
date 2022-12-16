import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,secondaryTitleColor } from '../constants';
import ActorCard from './ActorCard';

const ActorGrid = ({actors,navigation}) => {

  let list1 = []
  let list2 = []
  let list3 = []

  // {actors.map((item)=><ActorCard key={item.id} actor={item} navigation={navigation} />)}
  for(let i=0;i<actors.length;i++)
  {
    if(i%3==0)
    list1.push(actors[i])
    if(i%3==1)
    list2.push(actors[i])
    if(i%3==2)
    list3.push(actors[i])
  }
  return (
    <ScrollView style={{ backgroundColor:backgroundColor}} >
    <View style={{ flexDirection:"row" }}>

      <View style={{ flex:1, marginLeft:20,margin:5,alignItems:"center"}}>
      {list1.map((item)=><ActorCard actor={item} key={item.id} navigation={navigation}></ActorCard>)}
      </View>

      <View style={{ flex:1,margin:5,alignItems:"center"}}>
      {list2.map((item)=><ActorCard actor={item} key={item.id} navigation={navigation}></ActorCard>)}
      </View>

      <View style={{ flex:1, marginRight:20,margin:5,alignItems:"center"}}>
      {list3.map((item)=><ActorCard actor={item} key={item.id} navigation={navigation}></ActorCard>)}
      </View>

    </View>
    </ScrollView>
  )
}

export default ActorGrid