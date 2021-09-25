const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(cors());

app.use(express.json());
app.use(parser.urlencoded({ extended: true }));

const db = mysql.createPool({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: 'Password01!',
	database: 'ssts',
});

const sql_fetchAllEvents = 'SELECT * FROM event;';

app.get('/', (req, res) => {
	db.query(sql_fetchAllEvents, (err, result) => {
		if (err) throw err;
		res.send(result);
		console.log(result);
	});
});

app.get('/topGrid', (req, res) => {
	db.query(sql_fetchAllEvents, (err, result) => {
		if (err) throw err;
		res.send(result);
		console.log(result);
	});
});

const port = 5000;

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.listen(port, () => {
	console.log(`Running on port ${port}!`);
});
