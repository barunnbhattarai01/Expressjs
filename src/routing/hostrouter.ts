import { Request,Response } from "express-serve-static-core";
import { NextFunction } from "express-serve-static-core";
import { cookieJwtAuth } from "../middleware/cookies";


const express=require('express')
const path=require('path');
const hostrouter =express.Router();
const rootdir=require('../utils/utils')


const regiterdhome:(string | object)[]=[];
hostrouter.get("/add",cookieJwtAuth,(req:Request,res:Response,next:NextFunction)=>{
    regiterdhome.push({
    message: "Successfully registered",
    data: req.body,
  })
    res.sendFile(path.join(rootdir,"views","add.html"))
   
  

})
export { hostrouter, regiterdhome };
