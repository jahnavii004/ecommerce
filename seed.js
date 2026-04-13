const mongoose = require('mongoose');
const Product = require('./models/Product');

const  products = [
    {
        name : "Iphone 14 pro" , 
        img : "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8fHww ",
        price : 130000,
        desc : "very costly"
    },
    {
        name : "Macbook m2 pro" , 
        img : "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
        price : 250000,
        desc : "hehehhehe"
    },
    {
        name : "Iwatch" , 
        img : "https://images.unsplash.com/photo-1558126319-c9feecbf57ee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXdhdGNofGVufDB8fDB8fHww",
        price : 51000,
        desc : "theek hi h"
    },
    {
        name : "Ipad pro" , 
        img : "https://plus.unsplash.com/premium_photo-1681139760927-4c510ce6d8f0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
        price : 237900,
        desc : "tmse na ho payega"
    },
    {
        name : "Airpods" , 
        img : "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D",
        price : 25000,
        desc : "badhiya cheez h"
    }
]

async function seedDB(){
    await Product.insertMany(products);                //all these methods return promise (to prevent from chaining async await)
    console.log("data seeded successfully");
}

module.exports = seedDB;


