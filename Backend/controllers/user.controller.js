import { response } from "express";
import { validationResult } from "express-validator";
import usermodel from "../models/user.model.js";

export async function registerUser (req,res,next){
    console.log("registeruser running ");
    console.log(req.body);
    
    const errors = validationResult(req);// this will always return an array if the errors there it will 
    //return the errors in it if no errors in it it will give an empaty array 
    
    if(!errors.isEmpty()){
        console.log("invalid detailas",errors.array());
        res.json({Errors:"the errors from express-vlaidator",errors})
         return;
    }
    const username=req.body.username
    const email=req.body.email
    const password=req.body.password

    
    const user = await usermodel.create({
        username:username,
        email:email,
        password:password
    })
    res.send("user created ")
}
export default registerUser
