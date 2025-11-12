import { Router } from 'express';
import { resumebuilder } from '../controllers/resume.controller.js';



const routes= Router();

routes.get("/create",(req,res)=>{
    resumebuilder(req,res)
})


export default routes;