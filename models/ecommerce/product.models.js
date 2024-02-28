import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:32
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type: Array || String,
        required:true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    stock:{
        type:Number,
        required:true,
        default:0
    },
    sold:{
        type:Number,
        default:0
    },
},{timestamps:true})