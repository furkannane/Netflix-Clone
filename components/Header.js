import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,primaryTitleColor } from '../constants';
import { FontAwesome5,AntDesign  } from '@expo/vector-icons';

const Header = ({navigation}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const submit = (text) =>{
      if(text=="")
        return
      navigation.navigate("Search",{text:text})

    }


  return (
    <View style={{ marginBottom:10, backgroundColor:themeColor, borderBottomWidth:2,borderBottomColor:"white"}}>
      
      <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"center", height:height/8 }}>

          <View style={{ flex:1 , alignItems:"center",}}>

            <TouchableOpacity style={{ }} >
            <Image style={{ height:60, width:60, borderRadius:10, borderWidth:2,borderColor:"white"}} 
            source={{ uri:"https://w0.peakpx.com/wallpaper/728/519/HD-wallpaper-letter-n-red-abstract-colorful-colors-flow-lava-letter-n-liquid-mix-thumbnail.jpg"}} />
            </TouchableOpacity>

          </View> 


          <View style={{ marginLeft:10, marginRight:30, borderColor:"white", borderWidth:2, flexDirection:"row", flex:2}}>
              <TouchableOpacity style={{ margin:5,}}>
              <FontAwesome5 name="search" size={24} color="white" />
              </TouchableOpacity>
              <TextInput placeholder="Search" placeholderTextColor="white" style={{ flex:1, color:"white" }} onSubmitEditing={(x)=>submit(x.nativeEvent.text)} />

          </View>

      </View>

      <View style={{ flexDirection:"row", alignItems:"center", justifyContent:"center" , marginBottom:20}}>

        <TouchableOpacity style={{ flex:1,alignItems:"center", justifyContent:"center",flexDirection:"row"  }} onPress={()=>navigation.navigate("All Movies")}>
        <Text style={{ color:"white" }}>All Movies </Text>
        <AntDesign name="down" size={12} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={{ flex:1,alignItems:"center", justifyContent:"center",flexDirection:"row"  }} onPress={()=>navigation.navigate("Favourite Actors")} >
        <Text style={{ color:"white" }}>Fav Actors </Text>
        <AntDesign name="down" size={12} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={{ flex:1,alignItems:"center", justifyContent:"center" ,flexDirection:"row" }} onPress={()=>navigation.navigate("My List")} >
        <Text style={{ color:"white" }}>My List </Text>
        <AntDesign name="down" size={12} color="white" />
        </TouchableOpacity>
        


      </View>


    </View>
  )
}

export default Header