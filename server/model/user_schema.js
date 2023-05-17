import mongoose from "mongoose";
const UserSchema= new mongoose.Schema({
    firstname:{
        type: 'string',
        required: true,
        trim:true,
        min:5,
        max:25
    },
    lastname:{
        type: 'string',
        required: true,
        trim:true,
        min:5,
        max:25
    },
    password:{
        type: 'string',
        required: true,
        trim:true,
        min:8,
        max:20,
        unique:true
    },
    email:{
        type: 'string',
        required: true,
        trim:true,
        min:8,
        max:20,
        unique:true

    },
    phn_no:{
        type: 'string',
        required: true,
        trim:true,
        max:10,
        unique:true
    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    }]
});
const user=mongoose.model("user",UserSchema);
export default user;