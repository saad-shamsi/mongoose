import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
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
    bloodGroup:{
        type:String,
        enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"],
        required:true,
    },
    disease:{
        type:String,
        required:true,
    },
    contactNumber:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },


},{timestamps:true})

const Patient = mongoose.model("Patient", patientSchema)