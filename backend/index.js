const express = require('express');
const { connection } = require('./db');
require('dotenv').config();
const cors = require('cors');
const {userRouter} = require('./routes/User.routes')
const {restaurantRouter} = require('./routes/Restaurant.routes')

const {adminRouter} = require('./routes/Admin.routes')

const {giftRouter}=require("./routes/Gift.routes")


const app = express();
app.use(express.json());
app.use(cors())
app.use("/user", userRouter)

app.use('/admin', adminRouter);
// app.use(cors());

app.use('/restaurant', restaurantRouter);
app.use("/gift", giftRouter)
app.listen(process.env.PORT, async()=>{
    try{
        await connection
        console.log("Connected to DB")
    }
    catch(err){
        console.log(err);
    }
    console.log(`Running on port ${process.env.PORT}`);
})