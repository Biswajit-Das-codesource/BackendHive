import mongoose from "mongoose"

const workSchema = new mongoose.Schema({
    work:{
        type:String,
        required:true,
        lowercase:true
    },
    description:{
        type:String,
        required:true,
        lowercase:true
    },
    deadline:{
        type:Date,
        required:true
    },
    state:{
        type:String,
        enum:["pending","completed"],
        default:"pending"
    }
})

export const workmodel = mongoose.model("work",workSchema)