# Video-Streaming-React-Native-Django-App

This React Native and Django app is a video streaming app inspired by Netflix that allows users to search for movies, to view details of movies and it's actors, to watch the video attached to the movie (for obvious copyright reasons not the movie itself), to add movies and actors to their respective favourite lists. It fetches data from the Django backend app. Database contains some movies and actors. All data that the app needs is supplied by the backend.

## Screens and Explanation

Below are the screenshots from the app and the explanation for the pages

### Home Screen

<div flex-direction: row;>
<img src="/screenshots/Screenshot_20221216_135427_host.exp.exponent.jpg" width="308" height="651">
<img src="/screenshots/Screenshot_20221216_135439_host.exp.exponent.jpg" width="308" height="651">
<img src="/screenshots/Screenshot_20221216_135500_host.exp.exponent.jpg" width="308" height="651">
</div>

This is the homescreen of the app. You can search for movies using the search component. "All Movies" tab leads to the page where all movies are listed. "Fav Actors" and "My List" lead to liked actors list and liked movies list. There are segments like "popular movies", "movie of the day", "random movie segment" and "recommended for you". Pressing on a movie item leads to ""movie details" screen.

### Search Results Screen

<img src="/screenshots/Screenshot_20221216_135604_host.exp.exponent.jpg" width="308" height="651">

This is the search results screen where you can see the results of the search. Above result is the product of the "The last" search. Because "The Last Samurai" includes "The last", it appears as a result.

### Movie Details Screen

<div flex-direction: row;>
<img src="/screenshots/Screenshot_20221216_135537_host.exp.exponent.jpg" width="308" height="651">
<img src="/screenshots/Screenshot_20221216_135545_host.exp.exponent.jpg" width="308" height="651">
</div>

This is the movie details screen where you can see details about the movie like the description and the cast. You can like the movie by pressing the heart. You can also watch the associated video by clicking the button.

### Actor Details Screen

<img src="/screenshots/Screenshot_20221216_135624_host.exp.exponent.jpg" width="308" height="651">

This is the actor details screen where you can see details about the actor like the description and name.

### My List Screen

<img src="/screenshots/Screenshot_20221216_135636_host.exp.exponent.jpg" width="308" height="651">

This is the my list screen which lists liked movies.

### Favourite Actors Screen

<div flex-direction: row;>
<img src="/screenshots/Screenshot_20221216_135646_host.exp.exponent.jpg" width="308" height="651">
<img src="/screenshots/Screenshot_20221216_135653_host.exp.exponent.jpg" width="308" height="651">
</div>

This is the favourite actors screen which lists the liked actors. It also has a switch button where you can change the appereance of the actor items.
