import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    works:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'works'
        }
    ],
    pendingInvites:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        }
    ]
})

export const usermodel = mongoose.model("user",userSchema)