const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use('/discourse-proxy', express.static('public'));

app.post('/discourse-proxy', (req, res) => {
	console.log("Received data from discourse ", req.body);
	res.send({message: "OK"});
});


app.listen(process.env.PORT || 3000 );