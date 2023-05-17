import user from '../model/user_schema.js';

export const userLogin=async(req,res)=>{
    try{
        
        const User=await user.findOne({email:req.body.email,password:req.body.password});

        if(User)
        {
            return res.status(200).json({User});
        }
        else{
            return res.status(401).json({message:'Invalid login details'});
        }
    }
    catch(e){
        res.status(500).json('error',e.message);
        console.log(e);
    }

}
export const userSignup=async(req,res)=>{
    try{

        const exist=await user.findOne({email:req.body.email});
        if(exist) 
        {
            return res.status(401).json({message:'Username already exists'});
        }
        const User=req.body;
       // console.log(User);
        const newUser = new user(User);
        await newUser.save();

        res.status(200).json({User});
        
    }
    catch(e){
        res.status(500).json({message:e.message});
        console.log(e);
    }
    
}