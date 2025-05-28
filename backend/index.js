require('dotenv').config();
const express=require('express');
const cors=require('cors');
const app=express();
const PORT=process.env.PORT;
const database=require('./config/database');


app.use(cors());
app.use(express.json());

//database connect
database();


app.get('/',(req,res)=>{
    res.json({msg:"this is the home page"});
})

app.listen(PORT,(err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.info("server is run");
    }
})