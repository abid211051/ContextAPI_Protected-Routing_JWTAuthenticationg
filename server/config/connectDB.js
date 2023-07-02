require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log('Database is Connected successfully');
})
.catch((err)=>{
    console.log(err.message);
})