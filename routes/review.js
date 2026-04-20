const express = require('express');
//app should not be exported bcoz it is application instance and we cannot have more than one so they are not exported
const router = express.Router()        //mini instance/server



router.post('/products/:id/review',(req,res)=>{
    console.log(req.body);
    res.send("review route");
})


module.exports = router; 





