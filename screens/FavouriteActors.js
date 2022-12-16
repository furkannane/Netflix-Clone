import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,secondaryTitleColor } from '../constants';
import CategoryText from '../components/CategoryText';
import ActorGrid from '../components/ActorGrid';
import ActorDownList from '../components/ActorDownList';
import ActorCardSlider from '../components/ActorCardSlider';
import { FontAwesome } from '@expo/vector-icons';

const FavouriteActors = ({navigation}) => {

    const axios = require('axios').default
    const [data,setData] = useState("")
    const [horizontal,setHorizontal] = useState(true)


    useEffect(()=>{
        axios.get(apiName+"/api/my-actor-list")
        .then((r)=>{
          setData(r.data)
          console.log("Favourite actors list is ready")
        })
        .catch(function (error) {
          console.log(error);
        })
      },[])
    
      if(data == "")
    return(
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>
    </ScrollView>
  )

  return (
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>

    <CategoryText text="Favourite Actors" />

    <View style={{ margin:10, justifyContent:"center",alignItems:"center" }}>
    <TouchableOpacity style={{ height:35, width:35, borderRadius:50, backgroundColor:themeColor,alignItems:"center",justifyContent:"center",
      borderWidth:2,borderColor:"white"}} onPress={()=>setHorizontal(!horizontal)}>
    <FontAwesome name="exchange" size={22} color="white" />
    </TouchableOpacity>
    </View>

  {
    horizontal?<ActorDownList list={data} navigation={navigation} />:<ActorGrid actors={data} navigation={navigation} />
  }
    

    </ScrollView>
  )
}

export default FavouriteActors