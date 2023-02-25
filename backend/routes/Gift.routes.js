const express=require('express');
const {GiftModel}=require("../model/Gift.model")

const giftRouter= express.Router();

giftRouter.get("/", async(req,res)=>{
    try{
        let gift= await GiftModel.find()
        res.send(gift)
        console.log("get gift data")
    }catch(err){
        console.log(err);
    }
  
})


giftRouter.post("/addgift", async(req,res)=>{
   const data=req.body;
   try{
    const gift = new GiftModel(data)
    await gift.save()
    res.send(gift);
    console.log("successfully add gift")
   }catch(err){
    console.log(err);
   }
})


giftRouter.patch('/update/:id', async(req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    try{
        await GiftModel.findByIdAndUpdate({_id: ID}, payload);
        res.send({"msg": "updated"});
    }
    catch(err){
        res.status(400).send(err);
    }
});


giftRouter.delete('/delete/:id', async(req, res) => {
    const ID = req.params.id;

    try{
        await GiftModel.findByIdAndDelete({_id: ID});
        res.send({"MSG": "Deleted"});
    }
    catch(err){
        res.status(400).send(err);
    }
});

module.exports ={
    giftRouter 
}