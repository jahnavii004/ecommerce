const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({
     name : {
        type : String,
        trim : true,
        required : true
     },
     img : {
        type : String,
        trim : true,
        // default : 
     } ,
     price : {
        type : Number , 
        min : 0,
        required : true
     },
     desc : {
        type : String , 
        trim : true
     },
     reviews:[
      {
         type : mongoose.Schema.Types.ObjectId,
         ref : 'Review'
      }
     ]
})

//middleware jo bts mongodb operations krwane pr use hota h and iske andr pre and post middleware hote h which are basically used over the schema and before the model is js class


productSchema.post('findOneAndDelete',async function(product){
   if(product && product.reviews.length>0){
      await Review.deleteMany({_id:{$in:product.reviews}})
   }
})



let Product = mongoose.model('Product',productSchema);
module.exports = Product;











