import { Request,Response } from "express-serve-static-core";
import { NextFunction } from "express-serve-static-core";
import { cookieJwtAuth } from "./middleware/cookies";
import cookieParser from "cookie-parser";



//core modules
const http =require('http');
const path=require('path')

//External module
const express =require('express');
const app=express();
const dotenv=require("dotenv").config();


//local module
const router=require('./routing/routing')
const {hostrouter}=require('./routing/hostrouter')
const rootdirectory=require('./utils/utils')
const login =require('./routing/login')

app.use(express.urlencoded({ extended: true }));


//middleware

// app.use("/",(req:Request,res:Response,next:NextFunction)=>{
//     console.log("came in first middleware",req.url,req.method)
//        next()

// })

app.use(cookieParser()) //cookie parse should be before any route or middleware espcially looogin

app.use(router);
app.use(hostrouter)
app.post('/login',login)

//middleware for css
app.use(express.static(path.join(rootdirectory,'public')))


app.use((req:Request,res:Response ,next:NextFunction)=>{
    res.status(404).sendFile(path.join(rootdirectory,'views','404.html'))
})




const port=3000

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})