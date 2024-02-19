import mongoose from 'mongoose';

const subtodoSchema = mongoose.Schema({
    content:{
        type: String,
        require:true

    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true})

export const SubTodo= mongoose.model("SubTodo",subtodoSchema) 