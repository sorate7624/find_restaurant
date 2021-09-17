const express = require('express'); // 웹 앱 프레임워크
const app = express(); // 

app.post('/signup', async (request, response) => {
  let requestData = request.body;
  let responseData = require('../signup.json');
  console.log(requestData);
  response.json(responseData);
});