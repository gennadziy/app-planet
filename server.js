
//Install express server
const express = require('express');
const path = require('path');

const app = express();


// Serve only the static files form the dist directory
app.use(express.static('./dist/app-planet'));

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/app-planet/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
