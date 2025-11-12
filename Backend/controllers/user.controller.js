import {  validationResult } from "express-validator";
import usermodel from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

export async function registerUser(req, res) {
    
    console.log("registeruser running ");

    const errors = validationResult(req);// this will always return an array if the errors there it will 
    //return the errors in it if no errors in it it will give an empaty array 

    if (!errors.isEmpty()) {
        console.log("invalid detailas", errors.array());
        res.json({ Errors: "the errors from express-vlaidator", errors })
        return;
    }

    const username = req.body.username
    const email = req.body.email
    const myPlaintextPassword = req.body.password

   const hash =await bcrypt.hash(myPlaintextPassword, 10)
         
        const user = await usermodel.create({
            username: username,
            email: email,
            password: hash
        })

    

    const token = jwt.sign({

        Email:email,
        
    }, process.env.JWT_SECRET)
    console.log("this is jwt token: ",token)

    await res.cookie("Token", token) 
    



    await res.send("user created ")
}
export default registerUser
