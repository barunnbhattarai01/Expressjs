import { Request,Response } from "express-serve-static-core";
import { NextFunction } from "express-serve-static-core";


//core modules
const http =require('http');

//External module
const express =require('express');
const app=express();

//local module
const router=require('./routing/routing')
const hostrouter=require('./routing/hostrouter')

app.use(express.urlencoded({ extended: true }));


//middleware

// app.use("/",(req:Request,res:Response,next:NextFunction)=>{
//     console.log("came in first middleware",req.url,req.method)
//        next()

// })


app.use(router);
app.use(hostrouter)


app.use((req:Request,res:Response ,next:NextFunction)=>{
    res.status(404).send("<h1>404 Page not found</h1>")
})




const port=3000

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})