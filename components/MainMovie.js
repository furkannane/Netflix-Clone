import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,secondaryTitleColor } from '../constants';

const MainMovie = ({MainMovieObject, navigation}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

  return (
    <TouchableOpacity style={{ height:height/2, backgroundColor:themeColor, marginTop:10, marginBottom:20 , borderRadius:5, borderBottomWidth:2,borderBottomColor:"white" }}
     onPress={()=>navigation.navigate("Movie Details",{id:MainMovieObject.id})} >

    <Image style={{ flex:3, borderTopLeftRadius:5, borderTopRightRadius:5}} source={{ uri:MainMovieObject.image_l}} />

    <View style={{ flex:1}}>
        <View style={{ flex:2, flexDirection:"row", }}>
            <View style={{ height:"100%", width:8,backgroundColor:secondaryTitleColor }}/>
            <Text style={{ color:"white", fontWeight:"bold", marginLeft:10, fontSize:19}}>{MainMovieObject.name}</Text>
        </View>
        <View style={{ flex:5}}>
        {
          MainMovieObject?<Text style={{ color:"white", marginLeft:5, marginTop:5 }}>{MainMovieObject.description.length>150?MainMovieObject.description.slice(0,150)+"...":MainMovieObject.description}</Text>:<View/>
        }
        

        </View>

    </View>
      
    </TouchableOpacity>
  )
}

export default MainMovie