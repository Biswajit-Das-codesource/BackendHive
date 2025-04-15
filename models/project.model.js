import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageurl: {
    type: String,
    default:
      "https://imgs.search.brave.com/Yo6Z2fjvtHy8tL5S5FtjaOR1op2a1O2kfsGGr8eZUqI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/MDgzMDI2MS9waG90/by93aGF0cy1uZXh0/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1mUlBudEpaMFVW/eVpzU05qT3p0MzlC/UkhXb3A4MC1GcWoy/WU1CUmhRY2o4PQ",
  },
  contributor:{
    type:Array,
    default:[]
  }
});

export const projectModel = mongoose.model("projects",projectSchema)