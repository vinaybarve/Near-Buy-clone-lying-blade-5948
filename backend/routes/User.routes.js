const express=require('express');
const {UserModel}=require("../model/User.model")
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const userRouter=express.Router();


userRouter.get("/" , (req, res)=>{
    res.send("user data");
})


userRouter.post("/register" , async(req, res)=>{
    const {name, email, password ,city}=req.body
    try{
        bcrypt.hash(password, 5, async(err, hash)=>{
            if(err){
                res.send({"msg":"Something went wrong","error":err.message})
            }else{
                const user=new UserModel({name, email, city, password:hash})
                await user.save()
                res.send({"msg":"user register"});
            }
        });
    }catch(err){
        res.send({"msg":"user is not registered"})
        console.log(err)
    }
})


userRouter.post("/login" , async(req, res)=>{
    const { email ,password }=req.body;
    try{
       const user= await UserModel.find({email})
       if(user.length > 0){
           bcrypt.compare(password, user[0].password, async(err, result)=>{
               if(result){
                let token=jwt.sign({userID:user[0]._id}, "masai")
                   res.send({"msg":"login successfull", "token":token})
               }else{
                   res.send({"msg":"Somthing went wrong"})
                   console.log(err)
               }
           })
       }else{
          res.send({"msg":"wrong credentials"})
       }

    }catch(err){
        res.send({"msg":"user is not registered"})
    }
})

module.exports={userRouter}

