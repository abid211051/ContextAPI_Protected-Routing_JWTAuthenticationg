const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = require('./route/userroute');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.get('/', (req, res, next)=>{
    res.status(200).send({
        success : true,
        messsage : 'Helllo world'
    })
})

app.use('/api', userRoute);

app.use((err, req, res, next) => {
    res.status(500).send({
      success: false,
      message: err.message || 'Server Error'
    });
  });  

module.exports = app;