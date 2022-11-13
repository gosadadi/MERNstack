// import mongoose
const mongoose = require('mongoose');
// schema :the rules that the entries in the db must follow

const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"name is required"],
        minLength:[3,"title must be at least 3"]

    }
},{timestamps:true});
// the model-used to make the actual queries to the DB

const Author = mongoose.model('Author', AuthorSchema);
// export the model
module.exports = Author;
