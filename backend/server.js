const express = require('express');
var bodyParser = require('body-parser')
var env = require('dotenv').config();
var path = require('path')
var cors = require('cors');
const db = require('./database/database')
const app = express();
const user = require('./controllers/user')
const transaction = require('./controllers/transaction')
const account = require('./controllers/account')
const category = require('./controllers/category')

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static('public')); 
app.use('/images', express.static('images'));
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));

app.use('/user',user);
app.use('/transaction',transaction);
app.use('/account',account);
app.use('/category',category);

app.get('',(req,res)=>{
	res.send('working fine')
})

app.listen(PORT,()=>{
	console.log('running on port '+PORT);
})