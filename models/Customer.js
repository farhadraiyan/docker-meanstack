const mongoose=require("mongoose");
const CustomerSchema=mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, require:true},
    address:{type:String, required:true},
    city:{type:String, required:true},
    phone:{type:String, required:true},
    status:{type:String, required:true}
});
const Customer=module.exports = mongoose.model("Customer", CustomerSchema);