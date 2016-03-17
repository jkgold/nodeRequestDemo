var request = require('request');

request.get('http://damp-cove-43225.herokuapp.com/',
function(err, data){
  if(err) {
    console.log(err);
  } else {
    console.log(data.body);
  }
})

// request({
//   url: 'https://damp-cove-43225.herokuapp.com/addMessage',
//   method: 'POST',
//   json: {
//     name: 'Jason',
//     message: ' please join me in this robot prayer 01001101101'
//   }
// }, function(error, response, body){
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(response.statusCode);
//   }
// });
// request({
//   url: 'http://damp-cove-43225.herokuapp.com/addMessage',
//   method: 'POST',
//   json: {
//     name 'Jason',
//     message:'please join me in this robot prayer 01001101101'
//   }
// }, function(error, response, body) {
//   if(error) {
//     console.log(error);
//
//   } else {
//     console.log(response.statusCode);
//   }
// });
