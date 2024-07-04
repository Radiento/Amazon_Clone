const mongoose = require("mongoose");
const ratingSchemna = require("./rating");

const productSchema = mongoose.Schema({
    name:{
        required:true,
        type: String,
        trim:true,
    },
    description:{
        required:true,
        type: String,
        trim:true,
    },
    images:[{
        required:true,
        type: String,
    },],
    quantity:{
        required:true,
        type: Number,
    },
    price:{
        required:true,
        type: Number,
        
    },
    category:{
        required:true,
        type: String,
    },
    ratings:[ratingSchemna],
});

const Product = mongoose.model('Product', productSchema);
module.exports={Product, productSchema};