
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');



mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
.then(()=>{
    console.log("db connected successfully")
})
.catch((err)=>{
    console.log("db error");
    console.log(err);
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));  //views folder
app.use(express.static(path.join(__dirname,'public')))   //public folder

//seeding databse
// seedDB()        //run one time then comment otherwise multiple times it will be saved in db


PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server connected at port ${PORT}`)
})
