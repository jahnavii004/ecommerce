
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/product');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const reviewRoutes = require('./routes/review');

mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
.then(()=>{
    console.log("db connected successfully")
})
.catch((err)=>{
    console.log("db error");
    console.log(err);
})

app.engine('ejs',ejsMate);         //setting engine
app.set('view engine','ejs');                                             //ejs -> templating language looked by view engine  //using  ejs mate(ejs template engine for layouts) in place of default engine
app.set('views',path.join(__dirname,'views'));  //views folder
app.use(express.static(path.join(__dirname,'public')))   //public folder
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

//seeding databse
// seedDB()        //run one time then comment otherwise multiple times it will be saved in db

app.use(productRoutes); //so that har incoming request ke liye path check kiya jaye
app.use(reviewRoutes);




PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server connected at port ${PORT}`)
})
