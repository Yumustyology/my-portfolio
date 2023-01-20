const  mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    projectName:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    projectInfo:{
        type:String,
        required:true
    },
    livePreviewLink:{
        type:String,
        required:true
    },
    githubLink:{
        type:String,
        required:true
    },
    languages:{
        type:[String],
        required:true
    },
    featuredApp:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("projects",ProjectSchema)