const express = require('express');
//app should not be exported bcoz it is application instance and we cannot have more than one so they are not exported
const router = express.Router()        //mini instance/server
const Product = require('../models/Product')

 
router.get('/products', async(req,res)=>{
    let products = await Product.find({});  //returns promise
    res.render('products/index',{products});
} )





module.exports = router; 





