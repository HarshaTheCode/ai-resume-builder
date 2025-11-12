import { Router } from 'express';
import uservalidation from '../Middleware/rigistration.middleware.js';
import registerUser from '../controllers/user.controller.js';



const routes= Router();

  routes.get('/',(req,res)=>{
    console.log("this is page endppoint ");
    res.send('app was running in  test ') 
  })

 routes.post('/registration',uservalidation,(req,res)=>{
  console.log("route is working ");
  
        registerUser(req,res)
 })

export default routes;

