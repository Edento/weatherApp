var express = require('express');
var fs = require('fs'); // what is that?
var app = express();


var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var myTodos = [];               // instead of using mongo...
var uniqIDs = 0;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// set up the server routes
app.get('/', function (req, res) {
    console.log('someone has routed to /');
    res.sendFile(__dirname + '/public/index.html');
});

// REST API

// get all todos
// app.get('/api/todos', function (req, res) {
//     res.json(myTodos);
//     console.log("Current array is: " + myTodos);

// });

// listen on port
app.listen(8080, function () {
    console.log('App is up and running, listening on port 8080!');
});