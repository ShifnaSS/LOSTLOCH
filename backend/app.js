const express = require('express');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3300;
const bodyparser = require('body-parser');
const product_data = require('./src/model/product');

var app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
});
app.get('/productdetails',(req,res)=>
  {
    product_data.find()
    .then((product)=>
    {
        res.send(product);
        console.log(product);    })
    .catch((err)=>{
        console.log(err)
    })
  });

app.listen(port,()=>{console.log("Server Ready at" +port)});