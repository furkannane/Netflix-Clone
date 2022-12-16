import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,secondaryTitleColor } from '../constants';
import { AntDesign } from '@expo/vector-icons';

const ItemPhotoDesc = ({item}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const axios = require('axios').default
    const [heart,setHeart] = useState(item.in_list)

    const handlePress = ()=>{

      if(heart)
      {
            if(item.video_url)
            {
                axios.get(apiName+"/api/my-list/remove/"+item.id)
                .then((r)=>{
                    console.log("Removed from my list, movie id: "+item.id)
                })
                .catch(function (error) {
                    console.log(error);
                })      
            }
            else{
                axios.get(apiName+"/api/my-actor-list/remove/"+item.id)
                .then((r)=>{
                    console.log("Removed from my actor list, actor id: "+item.id)
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
          
      }
      else
      {
        if(item.video_url)
            {
                axios.get(apiName+"/api/my-list/add/"+item.id)
                .then((r)=>{
                    console.log("Added to my list, movie id: "+item.id)
                })
                .catch(function (error) {
                    console.log(error);
                })     
            }
            else{
                axios.get(apiName+"/api/my-actor-list/add/"+item.id)
                .then((r)=>{
                    console.log("Added to my actor list, actor id: "+item.id)
                })
                .catch(function (error) {
                    console.log(error);
                })
            }

      }

      setHeart(!heart)

  }

  return (
    <View style={{ height:height*3/5, backgroundColor:themeColor, marginTop:10, marginBottom:10 , borderRadius:5 }}>

    <Image style={{ flex:3, borderTopLeftRadius:5, borderTopRightRadius:5}} source={{ uri:item.image_l}} />

    <View style={{ flex:1}}>
        <View style={{ flex:2, flexDirection:"row",alignItems:"center" }}>
            <View style={{ height:"100%", width:8,backgroundColor:secondaryTitleColor }}/>
            <View style={{ flex:1  }}>
            <Text style={{ color:"white", fontWeight:"bold", marginLeft:10, fontSize:19,}}>{item.name}</Text>
            </View>
            <TouchableOpacity style={{ marginRight:20}} onPress={handlePress }>
                {heart?<AntDesign name="heart" size={24} color="white" />:<AntDesign name="hearto" size={24} color="white" />} 
            </TouchableOpacity>    
        </View>
        <View style={{ flex:5}}>

        <Text style={{ color:"white", marginLeft:5, marginTop:5 }}>{item.description}</Text>

        </View>

    </View>
      
    </View>
  )
}

export default ItemPhotoDesc