import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim: true  //removes any extra spaces before or after the string
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true,
        lowercase:[true, 'Email must be in lowercase'],
        trim: [true,"dont leave extra spaces in before and start"]  //removes any extra spaces before or after the string

    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        minlength:[6, 'Password must be at least 6 characters long']
    },

},{
    timestamps:true
})


export const User = mongoose.model("User", userSchema)