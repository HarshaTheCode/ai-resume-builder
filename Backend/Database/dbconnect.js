
import mongoose, { connect } from 'mongoose'


export  async function connectdb(){
    const MOONGO_URI = process.env.MOONGO_URI
   
    try{

        await connect(MOONGO_URI);
        
        console.log("db conneted");
    }catch(err){
        console.log("Error mesaage is: ",err);
        
    }
 
}