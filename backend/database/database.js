// create localhost connection using mongoose
const mongoose = require('mongoose');
const env = require('dotenv').config();

mongoose.connect(process.env.MONGO_URI,{
	useNewUrlParser:true,   
	useUnifiedTopology: true,
}).then(()=>{
	console.log('connected to database')
}).catch((err)=>{
	console.log(err)
})

module.exports = mongoose;
