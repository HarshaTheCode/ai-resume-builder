import mongoose  from "mongoose";

const userschema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        minlegth:[1,"username must be writen"]
    },
    email:{
        type:String,
        require:true,
        minlegth:[3,"emmail must be ented to rigister"]
    },
    password:{
        type:String,
        require:true,
        minlegth:[6,"password must be at least 6 charector length "]
    }

});

const usermodel = mongoose.model('user',userschema)

export default usermodel