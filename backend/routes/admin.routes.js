const express=require('express');
const {AdminModel}=require("../model/admin.model")
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const adminRouter=express.Router();



adminRouter.post("/register" , async(req, res)=>{
    const { name, email, password }=req.body
    try{
        bcrypt.hash(password, 5, async(err, hash)=>{
            if(err){
                res.send({"msg":"Something went wrong","error":err.message})
            }else{
                const admin=new AdminModel({name, email, password:hash})
                await admin.save()
                res.send({"msg":"admin register"});
            }
        });
    }catch(err){
        res.send({"msg":"admin is not registered"})
        console.log(err)
    }
})


adminRouter.post("/login" , async(req, res)=>{
    const { email , password }=req.body;
    try{
       const admin= await AdminModel.find({email})
       if(admin.length > 0){
           bcrypt.compare(password, admin[0].password, async(err, result)=>{
               if(result){
                    let token=jwt.sign({adminID:admin[0]._id}, "masai")
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
        res.send({"msg":"admin is not registered"})
    }
})

module.exports={adminRouter}

