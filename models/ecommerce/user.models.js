import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    userName:{
    type:String,
    required:true,
    trim:true,
    lowercase:true,
    unique:true

    },
    email:{
        type:String,    
        required:true,
        trim:true,
        lowercase:true,
        unique:true    
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    profileImage:{
        type:String,
        default:""
    },
    



    
},{timestamps:true})


export const User = mongoose.model("User", userSchema)