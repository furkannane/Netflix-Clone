import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,secondaryTitleColor } from '../constants';

const ActorHorizontalCard = ({navigation,actor}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

  return (
    <TouchableOpacity style={{ height: height/8, backgroundColor:themeColor , margin:10,marginBottom:5,marginTop:5,flexDirection:"row",alignItems:"center",borderRadius:8}}
    onPress={ ()=>navigation.navigate("Actor Details",{actor:actor}) }>

    <View style={{ height: height/10, width:height/10, marginRight:10,marginLeft:10}}>
    <Image style={{ height:"100%", width:"100%",borderRadius:50,borderWidth:2,borderColor:"white"}} source={{ uri:actor.image_s}} />   
    </View>

    <View style={{ margin:10, width:"70%"}}>
    <Text style={{ color:"white", fontWeight:"bold"}}>{actor.name}</Text>
    <Text style={{ color:"white"}}>{actor.description.length>180?actor.description.slice(0,100)+"...":actor.description}</Text>
    </View>

    </TouchableOpacity>
    
  )
}

export default ActorHorizontalCard