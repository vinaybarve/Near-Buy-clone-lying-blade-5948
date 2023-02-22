const express = require('express');
const { connection } = require('./db');
require('dotenv').config();
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());
 
app.get('/', (req, res) => {
    res.send("Home page");
})

// app.use("/users", userRouter);
// app.use(authenticate);
// app.use('/posts', postRouter);

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