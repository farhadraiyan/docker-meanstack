const mongoose=require("mongoose");
const VideoSchema=mongoose.Schema({
    title:{type:String,required:true},
    runtime:{type:String, required:true},
    genre:{type:String, required:true},
    rating:{type:String,required:true},
    director:{type:String, required:true},
    status:{type:String, required:true},
    imgPath:{type:String, required:true}
});
const Video=module.exports = mongoose.model("Video", VideoSchema);
