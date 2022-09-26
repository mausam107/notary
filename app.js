const express=require("express");
const bodyParser=require("body-parser");
const cors =require("cors");

const mongoose = require('mongoose');

const userRoutes=require("./routes/user");

require("dotenv").config();

const app=express();

app.use(cors());

app.use(bodyParser.json())

app.use(userRoutes);

mongoose.connect(process.env.MongoUser)
.then(result=>{
    app.listen(8080,()=>{
        console.log("connected");
    })
})
.catch(err=>console.log(err));