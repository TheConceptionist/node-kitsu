# node-kitsu #
## A simple and easy way to pull info from kitsu.io ##

[![NPM](https://nodei.co/npm/node-kitsu.png)](https://nodei.co/npm/node-kitsu/)

Functions:

`searchAnime(query, [callback])`
Returns an array of anime objects with anime data if found, null otherwise. First object is probably the best fit for the search.
Full anime object can be found [here](http://docs.kitsu17.apiary.io/#reference/media/anime).

```javascript
var kitsu = require('node-kitsu');

kitsu.searchAnime('New Game!', function(error, results) {
    console.log(results[0])
});
```

`listAnime(offset, [callback])`
Returns an array of 10 anime out of all of the anime on the site in order of ID. Offset can be changed to move the starting point. Default is 0.

```javascript
var kitsu = require('node-kitsu');

kitsu.listAnime(0, function(error, results) {
    console.log(results[0])
});
```

`searchManga(query, [callback])`
Returns an array of manga objects with manga data if found, null otherwise. First object is probably the best fit for the search.
Full manga object can be found [here](http://docs.kitsu17.apiary.io/#reference/media/manga).

```javascript
var kitsu = require('node-kitsu');

kitsu.searchManga('Monster Musume', function(error, results) {
    console.log(results[0])
});
```

`listManga(offset, [callback])`
Returns an array of 10 manga out of all of the anime on the site in order of ID. Offset can be changed to move the starting point. Default is 0.

```javascript
var kitsu = require('node-kitsu');

kitsu.listManga(0, function(error, results) {
    console.log(results[0])
});
```

`searchDrama(query, [callback])`
Returns an array of drama objects with drama data if found, null otherwise. First object is probably the best fit for the search.
Full drama object can be found [here](http://docs.kitsu17.apiary.io/#reference/media/drama).

```javascript
var kitsu = require('node-kitsu');

kitsu.searchManga('Monster Musume', function(error, results) {
    console.log(results[0])
});
```

`listDrama(offset, [callback])`
Returns an array of 10 dramas out of all of the dramas on the site in order of ID. Offset can be changed to move the starting point. Default is 0.

```javascript
var kitsu = require('node-kitsu');

kitsu.listDrama(0, function(error, results) {
    console.log(results[0])
});
```

`listUsers(offset, [callback])`
Returns an array of 10 users out of all of the users on the site in order of ID. Offset can be changed to move the starting point. Default is 0.

```javascript
var kitsu = require('node-kitsu');

kitsu.listUsers(0, function(error, results) {
    console.log(results[0])
});
```

`getUser(uid, [callback])`
Gets a user's info by username. Returns an array with (most likely) only one object.
Full user object can be found [here](http://docs.kitsu17.apiary.io/#reference/users/library/users).

```javascript
var kitsu = require('node-kitsu');

kitsu.getUser("TheConceptionist", function(error, results) {
    console.log(results[0])
});
```

`listGenres(offset, [callback])`
Returns an array of 10 genres out of all of the genres on the site in order of ID. Offset can be changed to move the starting point. Default is 0.

```javascript
var kitsu = require('node-kitsu');

kitsu.listGenres(0, function(error, results) {
    console.log(results[0])
});
```