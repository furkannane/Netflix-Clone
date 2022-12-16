import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,popularMovieList,MainMovieObject,cast } from '../constants';
import CategoryText from '../components/CategoryText';
import ItemPhotoDesc from '../components/ItemPhotoDesc';
import MovieCardSlider from '../components/MovieCardSlider';
import ActorCardSlider from '../components/ActorCardSlider';
import { AntDesign } from '@expo/vector-icons'; 

const MovieDetails = ({route,navigation}) => {

    const axios = require('axios').default
    const [data,setData] = useState("")

    useEffect(()=>{
      axios.get(apiName+"/api/movie-detail/"+route.params.id)
      .then((r)=>{
        setData(r.data)
        console.log("Movie details are ready for "+r.data.movie.name)
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

    <CategoryText text="Movie Details" />

    <ItemPhotoDesc item={data.movie}  />

    <View style={{ margin:20 }}>
    <Button title="Watch Now" color="red" onPress={()=>navigation.navigate("Video Screen",{movie:data.movie})} />
    </View>

    <CategoryText text="Cast" />

    <ActorCardSlider list={data.actors} navigation={navigation} />

    </ScrollView>
  )
}

export default MovieDetails