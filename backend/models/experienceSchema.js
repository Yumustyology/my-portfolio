const mongoose = require('mongoose');

const ExperienceSchema = mongoose.Schema({
    companyName:{
        type:String,
        required:true,
    },
    tasks:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    tagName:{
        type:String,
        required:true,
    },
    role:{
        type:String,
    },
    fromDate:{
        type:String,
    },
    toDate:{
        type:String,
    }
})

module.exports = mongoose.model('Experience', ExperienceSchema);