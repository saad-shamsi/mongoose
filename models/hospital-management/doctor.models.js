import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    age:{
        type:Number,
        required:true,
    },
    qualification:{
        type:String,
        required:true,
    },
    specialization:{
        type:String,
        required:true,
    },
    contactNumber:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    sits:{
        type:Number,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    profileImage:{
        type:String,
        default:""
    },
    experience:{
        type:Number,
        required:true,
    },
    hospital:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
    }],
}, {timestamps:true})

const Doctor = mongoose.model("Doctor", doctorSchema)