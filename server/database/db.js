import mongoose from "mongoose";

const connection = async ()=>{
    const URL = 'mongodb://localhost:27017/crud';
 
    try{
       await mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true });
       console.log("Database Connection Successfully!.");
    }catch(err){
        console.log("Connection Failed.");
    }
}
export default connection;