import { Request,Response } from "express-serve-static-core";
import { NextFunction } from "express-serve-static-core";

const express=require('express')
const path=require('path');
const hostrouter =express.Router();
const rootdir=require('../utils/utils')


const regiterdhome:(string | object)[]=[];
hostrouter.post("/add",(req:Request,res:Response,next:NextFunction)=>{
    regiterdhome.push('Sucessfully registered",req.body')
    res.sendFile(path.join(rootdir,"views","add.html"))
   
  

})

exports.hostrouter=hostrouter;
exports.regiterdhome=regiterdhome;