const express = require('express');
const app = express();
const mongoose = require('mongoose');

// const DATABASE = 'mongodb://localhost:27017/testup';
const DATABASE = 'mongodb://mymongo:27017/testup'; //mymongo is the name of the mongo container
//see in the yml file

mongoose
	.connect(DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('DATABASE CONNECTED!!!');
	})
	.catch(() => {
		console.log('error occured during connecting to db!!');
	});

app.get('/', (req, res) => {
	res.send('<h1>You requested / route...</h1>');
});

app.listen(8000, () => {
	console.log('App listening at PORT 8000');
});
