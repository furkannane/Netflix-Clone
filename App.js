import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Home from './screens/Home';
import MovieDetails from './screens/MovieDetails';
import MyList from './screens/MyList';
import ActorDetail from './screens/ActorDetail';
import FavouriteActors from './screens/FavouriteActors';
import Search from './screens/Search';
import VideoScreen from './screens/VideoScreen';
import AllMovies from './screens/AllMovies';


const Stack = createStackNavigator()


export default function App() {

  return (
    
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
      <Stack.Screen name="Movie Details" component={MovieDetails} options={{ headerShown: false }} />
      <Stack.Screen name="My List" component={MyList} options={{ headerShown: false }} />
      <Stack.Screen name="Actor Details" component={ActorDetail} options={{ headerShown: false }} />
      <Stack.Screen name="Favourite Actors" component={FavouriteActors} options={{ headerShown: false }} />
      <Stack.Screen name="All Movies" component={AllMovies} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="Video Screen" component={VideoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
