import mongoose from 'mongoose';

const todoSchema = new mongoose.model({
    content:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User", //referencing the User model in our app
        required:true
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]
},{timestamps:true})



export const Todo = mongoose.model("Todo", todoSchema)