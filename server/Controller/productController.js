import { createRequire } from 'module';
const require = createRequire(import.meta.url)

import product from '../model/product_schema.js';
import user from '../model/user_schema.js';
require('dotenv').config();

const accountSid = process.env.SID;
const authToken = process.env.AUTH_TOKEN;
const twilio = require('twilio')(accountSid,authToken);

export const getProducts= async(req,res)=>{
    try{
        const products=await product.find({});
        res.status(200).json(products);

    }catch(err){
        res.status(500).json({message: err.message});
    }

}

export const getProductbyID=async(req,res)=>{
    try{
        const id=req.params.id;
        
        const productDet=await product.findOne({'id':id});
        res.status(200).json(productDet);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
}


export const updateCart = async(req,res)=>{
    try{
        
        const userId=req.params.userid;
        const productId=req.body.productId;
        console.log(productId);
        console.log(userId);
        const isUser=await user.findOneAndUpdate({_id:userId},{$addToSet:{cart:productId}},{new:true});    
        res.status(200).json(isUser);
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }

}

export const getCart=async(req,res)=>{
    try{
        
        const userId= req.params.userid;
        const User=await user.findOne({_id:userId}).populate({path:'cart'});
        res.status(200).send(User);
       
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
}
export const delCart=async(req,res)=>{
    try{
        
        const User=req.params.userid;
        const itemId=req.body.itemId;
        
        //console.log(localStorage.getItem('userId'));
        const isUser=await user.findOneAndUpdate({_id:User},{$pull:{cart:itemId}},{new:true});
        res.status(200).json(isUser);
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}

export const getOtp=async(req, res) => {
    try{
        const otp=Math.floor(Math.random() * (9999 - 1001) + 1001);
        const userid=req.params.userid;
        
        const isUser=await user.findOne({_id:userid});
        twilio.messages.create({
            from:"+12543204715",
            to:`+91${isUser.phn_no}`,
            body:otp,
        }).then((res)=>console.log("msg sent")).catch((err)=>{console.log(err)});
        res.status(200).json({message: otp});
    }
    catch(err){
        console.log(err);
    }
}