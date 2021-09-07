const express = require('express');
const app = express();
//const cors = require("cors");

//Create cors which allows talk to ReactJS
//app.use(cors({origin: 'http://localhost:3000'}));

//Initialise routes
//app.use('/api', require('./routes/api'));

//Listen for requests
app.listen(process.env.port || 9000, function(){
	console.log('Listening for requests...');
});