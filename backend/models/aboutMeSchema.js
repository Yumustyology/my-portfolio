const mongoose = require('mongoose');

const AboutMeSchema = mongoose.Schema({  
    info:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('AboutMe', AboutMeSchema);