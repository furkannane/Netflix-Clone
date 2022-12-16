import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,secondaryTitleColor } from '../constants';

const MovieHorizontalCard = ({navigation,movie}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
 
  return (

    <View style={{ height: height/5, backgroundColor:themeColor , marginBottom:5, marginTop:5}}>

    <View style={{ flex:1, flexDirection:"row"}}>
    
    <TouchableOpacity onPress={()=>navigation.navigate("Movie Details",{id:movie.id})}>

    <Image style={{ height:"100%", width:width/4}} source={{ uri:movie.image_s}} />

    </TouchableOpacity>
        
        <View style={{ flex:1}}>

            <View style={{flexDirection:"row"}}>

                <View style={{ height:"100%", width:8, backgroundColor:secondaryTitleColor }}/>

                <View style={{ flex:1 }}>
                    <Text style={{ color:"white", fontWeight:"bold", margin:10 }}>{movie.name}</Text>
                </View>
                
            </View>
            <View style={{ }}>

                <Text style={{ color:"white", marginLeft:10, marginTop:5}}>{movie.description.length>180?movie.description.slice(0,180)+"...":movie.description}</Text>

            </View>

        </View>

    </View>
      
    </View>
  )
}

export default MovieHorizontalCard