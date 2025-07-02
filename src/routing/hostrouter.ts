import { Request,Response } from "express-serve-static-core";
import { NextFunction } from "express-serve-static-core";

const express=require('express')
const hostrouter =express.Router();


hostrouter.post("/add",(req:Request,res:Response,next:NextFunction)=>{
    res.send(`Go back too main page ${req.body.username}
       <a href="/">MAin page</a>
       `
    )
  

})

module.exports=hostrouter;