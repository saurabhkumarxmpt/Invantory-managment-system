const mongoose=require('mongoose');


const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI); //mongodb url import from .env file
        console.info('Database Connect');
    }catch(err){
        console.error(err.message);
    }
}

module.exports=connectDB;