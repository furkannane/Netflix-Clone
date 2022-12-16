import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,secondaryTitleColor } from '../constants';
import ActorHorizontalCard from './ActorHorizontalCard';

const MovieCardWithActors = ({navigation,item}) => {

    const movie = item.movie
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
            <View style={{}}>
                <Text style={{ color:"white", margin:5,fontSize:10 }}>{movie.description.slice(0,150)}...</Text>
                <View style={{ flexDirection:"row" }}>
                <TouchableOpacity style={{ margin:5,flexDirection:"row",flex:1,overflow:"hidden",alignItems:"center" }}
                onPress={()=>navigation.navigate("Actor Details",{actor:item.actors[0]})}>
                <Image style={{ height:width/10, width:width/10,borderRadius:50,borderWidth:1,borderColor:"white"}} source={{ uri:item.actors[0].image_s}} />
                <Text style={{ color:"white", fontWeight:"bold", margin:5,fontSize:10 }}>{item.actors[0].name}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin:5,flexDirection:"row" ,flex:1,overflow:"hidden",alignItems:"center"}}
                onPress={()=>navigation.navigate("Actor Details",{actor:item.actors[1]})}>
                <Image style={{ height:width/10, width:width/10,borderRadius:50,borderWidth:1,borderColor:"white"}} source={{ uri:item.actors[1].image_s}} />
                <Text style={{ color:"white", fontWeight:"bold", margin:5,fontSize:10 }}>{item.actors[1].name}</Text>
                </TouchableOpacity>
                </View>

        

            </View>

        </View>

    </View>
      
    </View>
  )
}

export default MovieCardWithActors