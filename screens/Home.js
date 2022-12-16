import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,primaryTitleColor } from '../constants';
import CategoryText from '../components/CategoryText';
import MovieCardSlider from '../components/MovieCardSlider';
import MainMovie from '../components/MainMovie';
import MovieDownList from '../components/MovieDownList';
import Header from '../components/Header';
import MovieCardWithActorsList from '../components/MovieCardWithActorsList';

const Home = ({navigation}) => {

    apiName = "https://tryexample.loca.lt"

    const [mainMovieObject,setMainMovieObject] = useState("")
    const [popularMovieList,setPopularMovieList] = useState([])
    const [recommendedMovieList,setRecommendedMovieList] = useState([])
    const [randomMovie,setRandomMovie] = useState("")
    const [popularMovieDetailedList,setPopularMovieDetailedList] = useState([])

    const axios = require('axios').default

    useEffect(()=>{
      axios.get(apiName+"/api/main-movie")
      .then((r)=>{
        setMainMovieObject(r.data)
        console.log("Main Movie is ready")
      })
      .catch(function (error) {
        console.log(error);
      })

      axios.get(apiName+"/api/popular-movies")
      .then((r)=>{
        setPopularMovieList(r.data)
        console.log("Popular Movie List is ready")
      })
      .catch(function (error) {
        console.log(error);
      })

      axios.get(apiName+"/api/recommended-movies")
      .then((r)=>{
        setRecommendedMovieList(r.data)
        console.log("Recommended Movie List is ready")
      })
      .catch(function (error) {
        console.log(error);
      })

      axios.get(apiName+"/api/random-movie")
      .then((r)=>{
        setRandomMovie(r.data)
        console.log("Random Movie is ready")
      })
      .catch(function (error) {
        console.log(error);
      })

      axios.get(apiName+"/api/popular-movies-details")
    .then((r)=>{
      setPopularMovieDetailedList(r.data)
      console.log("Popular Movie Detailed List is ready")
    })
    .catch(function (error) {
      console.log(error);
    })

    },[])



  return (
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>

    <Header navigation={navigation} />

    <CategoryText text="Movie Of The Day" />

    <MainMovie MainMovieObject={mainMovieObject} navigation={navigation} />

    <CategoryText text="List Of Popular Movies" />

    <MovieCardSlider list={popularMovieList} navigation={navigation} />

    <CategoryText text="Random Movie Segment"  />

    <MainMovie MainMovieObject={randomMovie} navigation={navigation} />

    <CategoryText text="Recommended Movies For You"  />

    <MovieCardSlider list={recommendedMovieList} navigation={navigation} />

    <CategoryText text="Recently Added Movies" />

    <MovieCardWithActorsList list={popularMovieDetailedList} navigation={navigation} />

    </ScrollView>
  )
}

export default Home