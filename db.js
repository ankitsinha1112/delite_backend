const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://root:ankit@cluster0.3hrun.mongodb.net/new_delite"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo succesfully");
    })
}

module.exports = connectToMongo;