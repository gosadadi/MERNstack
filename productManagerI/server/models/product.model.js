// import mongoose
const mongoose = require('mongoose');
// schema :the rules that the entries in the db must follow

const ProductSchema = new mongoose.Schema({
    title: {
        type:String,
        required:[true,"title required"],
        minLength:[2,"title must be at least 6"]

    },
    price: {
        type:Number,
        required:[true,"price required"],
        min:[1,"price must be at least 6"]

    },
    description: {
        type:String,
        required:[true,"Description required"],
        minLength:[2,"Description must be at least 2"]

    },
},{timestamps:true});
// the model-used to make the actual queries to the DB

const Product = mongoose.model('Product', ProductSchema);
// export the model
module.exports = Product;
