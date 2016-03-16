# Practice making HTTP requests from node !
### https://www.npmjs.com/package/request

#### Fork and clone this repo then run these commands:

```
$ npm init --yes
$ npm install --save request
```

#### Then in your request.js file

```
var request = require('request');
//try a get request and console.log the results
request
  .get('https://galvanize-eats-api.herokuapp.com/menu')
  .on('response', function(response) {
    console.log(response.statusCode)
    console.log(response.body)
  })

//try a post request
request.post({url:'https://galvanize-eats-api.herokuapp.com/orders', form: {key:'value'}}, function(err,httpResponse,responseBody){
  if(err){
    console.log(error);
  }else {
    console.log(responseBody);
  }
  })


```
