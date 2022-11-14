// ========import mongoose==========
const mongoose = require('mongoose');
// =======schema :the rules that the entries in the db must follow=======
// =====inside schema pass in the object your model want to look like=====
const ModelSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"name is required"],
        minLength:[3,"name must be at least 3"]
    },
    image:{
        type:String,
        required:[true,"please add image"],
        min:[1,"you have to put at least 1 image"]
    },
    treasureChests:{
        type:Number,
        required:[true,"Please choose treasure chests number"]
    }, 
    catchPhrase:{
        type:String,
        required:[true,"please add catch phrase"],
        min:[3,"you have to put at least 1 catch phrase"]
    },
    crewPosition:{
        type:String,
        required:[true,"please choose crew position"],
        
    },
    pegLeg:{
        type:Boolean,
        default:true
    },
    eyePatch:{
        type:Boolean,
        default:true
    },
    hookHand:{
        type:Boolean,
        default:true
    }

},{timestamps:true});

// =======the model-used to make the actual queries to the DB=======
const Model = mongoose.model('Pirate', ModelSchema);
// =====export the model========
module.exports = Model;
