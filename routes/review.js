const express = require('express');
//app should not be exported bcoz it is application instance and we cannot have more than one so they are not exported
const router = express.Router()        //mini instance/server
const Product = require('../models/Product')
const Review = require('../models/Review')


router.post('/products/:id/review',async(req,res)=>{
    let {id} = req.params;
    let {rating, comment} = req.body;
    const product = await Product.findById(id);
   const review = new Review({rating,comment});      //js way

   product.reviews.push(review);
   await review.save();
   await product.save();
   res.redirect(`/products/${id}`)
})


module.exports = router; 





