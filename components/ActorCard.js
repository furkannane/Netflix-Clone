import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,secondaryTitleColor } from '../constants';


const ActorCard = ({navigation,actor}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

  return (
    <TouchableOpacity style={{ height:height/4, width:width/4, backgroundColor:themeColor, margin:5 , borderRadius:5}} 
    onPress={()=>navigation.navigate("Actor Details",{actor:actor})}>

        <Image style={{ flex:4, borderTopLeftRadius:5, borderTopRightRadius:5}} source={{ uri:actor.image_s}} />

        <View style={{ flex:1, flexDirection:"row"}}>

            <View style={{ height:"100%", width:8, backgroundColor:secondaryTitleColor }}/>

            <View style={{ flex:1,justifyContent:"center", alignItems:"center" }}>
                <Text style={{ color:"white", fontWeight:"bold", marginRight:actor.name.length>6?0:10 }}>{actor.name}</Text>
            </View>

        </View>

        

    </TouchableOpacity>
  )
}

export default ActorCard