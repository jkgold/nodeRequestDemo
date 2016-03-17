# Practice making HTTP requests from node !
### https://www.npmjs.com/package/request

#### Fork and clone this repo then run these commands:

```
$ npm init --yes
$ npm install --save request
```

#### Then in your request.js file

* The idea here is to make a get request and see what is currently in the api's database.
* Then make a post request with a new object with your name and a new message.
* Then make the get request again to confirm that your object was added to the database

```
var request = require('request');

//try a get request
request.get('https://damp-cove-43225.herokuapp.com/', function(err, data){
  if (err) {
    console.log(error);
  } else {
    console.log(data.body);
  }
})


//try a post request
//this api allows a json object with a name and message property

request({
  url: 'https://damp-cove-43225.herokuapp.com/addMessage',
  method: 'POST',
  json: {
    name: 'hacker',
    message: '01001101101'
  }
}, function(error, response, body){
  if(error) {
    console.log(error);
  } else {
    console.log(response.statusCode);
  }
});



```
