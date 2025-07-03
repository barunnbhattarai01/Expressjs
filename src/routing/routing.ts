import { Request,Response } from "express-serve-static-core";
import { NextFunction } from "express-serve-static-core";

const express =require('express');
const path=require('path')

//local module
const rootdir=require('../utils/utils')  //file helper

const router=express.Router()


router.use("/",(req:Request,res:Response,next:NextFunction)=>{
    console.log("came in first middleware",req.url,req.method)
       next()

})

router.get("/",(req:Request,res:Response,next:NextFunction)=>{
   res.sendFile(path.join(rootdir,"views","home.html"))
})

module.exports=router