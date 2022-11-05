// import mongoose
const mongoose = require('mongoose');
// schema :the rules that the entries in the db must follow

const JokeSchema = new mongoose.Schema({
    setUp: {
        type:String,
        required:[true,"setup required"],
        minLength:[2,"setup must be at least 6"]

    },
    punch: {
        type:String,
        required:[true,"punch up required"],
        minLength:[2,"punch must be at least 6"]

    },
},{timestamps:true});
// the model-used to make the actual queries to the DB

const Joke = mongoose.model('Joke', JokeSchema);
// export the model
module.exports = Joke;
