import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    },
    quantity:{
        type:Number,
        required:true
    }
})
const categorySchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    orderItems:{
        type:[orderItemSchema],
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Processing","Shipped","Delivered","Cancelled"],
        default:"Processing"
    }
},{timestamps:true})