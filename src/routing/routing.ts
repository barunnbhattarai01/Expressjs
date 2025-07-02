import { Request,Response } from "express-serve-static-core";
import { NextFunction } from "express-serve-static-core";

const express =require('express');

const router=express.Router()


router.use("/",(req:Request,res:Response,next:NextFunction)=>{
    console.log("came in first middleware",req.url,req.method)
       next()

})

router.get("/",(req:Request,res:Response,next:NextFunction)=>{
   res.send(`
    <h1>Welcome register</h1>
    <form action="/add"  method="POST">
      <input type="text" name="username" />
      <input type="submit">
       </form>`
    )
  

})

module.exports=router