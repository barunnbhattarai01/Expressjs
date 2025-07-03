import { Request,Response } from "express-serve-static-core";
import { NextFunction } from "express-serve-static-core";

const express=require('express')
const path=require('path');
const hostrouter =express.Router();



hostrouter.post("/add",(req:Request,res:Response,next:NextFunction)=>{
    
    res.sendFile(path.join(__dirname,"../","views","add.html"))
   
  

})

module.exports=hostrouter;