import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,popularMovieList,MainMovieObject,primaryTitleColor } from '../constants';
import CategoryText from '../components/CategoryText';
import MovieDownList from '../components/MovieDownList';

const MyList = ({route,navigation}) => {

  const axios = require('axios').default
  const [data,setData] = useState("wait")

  useEffect(()=>{
    axios.get(apiName+"/api/my-list")
    .then((r)=>{
      setData(r.data)
      console.log("My list is ready")
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

        <CategoryText text="My List" />

        <MovieDownList list={data} navigation={navigation} />

    </ScrollView>

    

  )
}

export default MyList