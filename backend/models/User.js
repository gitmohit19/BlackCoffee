const mongoose =require('mongoose');

const UserSchema= new mongoose.Schema({
    intensity: Number,
    likelihood: Number,
    relevance: Number,
    year: Number,
    country: String,
    topics: [String],
    region: String,
    city: String
    
})

const UserModel =mongoose.model("coffedata",UserSchema);
module.exports= UserModel;