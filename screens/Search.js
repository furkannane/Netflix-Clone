import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,secondaryTitleColor } from '../constants';
import CategoryText from '../components/CategoryText';
import MovieDownList from '../components/MovieDownList';


const Search = ({route,navigation}) => {

    const text = route.params.text
    const axios = require('axios').default
    const [data,setData] = useState("wait")

    useEffect(()=>{
        axios.get(apiName+"/api/movie/"+text)
        .then((r)=>{
          setData(r.data)
          console.log("Search is done for "+text)
        })
        .catch(function (error) {
          console.log(error);
        })
      },[])
    
      if(data == "wait")
    return(
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>
    </ScrollView>
  )

  return (
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>

    <CategoryText text={"Search Results For: "+text} />

    <MovieDownList list={data} navigation={navigation} />

    </ScrollView>
  )

}

export default Search