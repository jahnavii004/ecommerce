const express = require('express');
//app should not be exported bcoz it is application instance and we cannot have more than one so they are not exported
const router = express.Router()        //mini instance/server
const Product = require('../models/Product');
const Review = require('../models/Review');

 //to show all the products
router.get('/products', async(req,res)=>{
    let products = await Product.find({});  //returns promise
    res.render('products/index',{products});
} )


// to show the form for new product
 router.get('/product/new',(req,res)=>{
    res.render('products/new');
 })

//to actually add the product
router.post('/products' , async(req,res)=>{
    let {name, img, price, desc} = req.body;
    await Product.create({name, img, price, desc})
    res.redirect('/products');
})

//to show a particuar product
router.get('/products/:id',async(req,res)=>{
    let {id} = req.params;
  let foundProduct = await Product.findById(id).populate('reviews');  //reviews array ke andr project id h
  res.render('products/show',{foundProduct})
})

//from to edit the product
router.get('/products/:id/edit',async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit',{foundProduct})
})

//to actually edit the data in db
router.patch('/products/:id',async(req,res)=>{
    let {id} = req.params;
    let {name,img, price,desc} = req.body;
   await Product.findByIdAndUpdate(id ,{name,img, price,desc} );
   res.redirect(`/products/${id}`)
})

//to delete a product
router.delete('/products/:id',async(req,res)=>{
    let {id} = req.params;

    const product = await Product.findById(id);
    
    // for(let id of product.reviews){              //deleting reviews
    //    await Review.findByIdAndDelete(id);  
    // }

   await Product.findByIdAndDelete(id);
   res.redirect('/products');
})
module.exports = router; 





